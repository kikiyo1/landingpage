import React, { useState, useMemo, useRef } from 'react';
import { useProducts } from '@/context/ProductContext';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/components/ui/use-toast';
import { MoreHorizontal, PlusCircle, Upload } from 'lucide-react';

const ProductManagement = () => {
  const { products, addProduct, updateProduct, deleteProduct } = useProducts();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const fileInputRef = useRef(null);
  const { toast } = useToast();

  const handleAddProduct = () => {
    setEditingProduct(null);
    setImagePreview(null);
    setIsDialogOpen(true);
  };

  const handleEditProduct = (product) => {
    setEditingProduct(product);
    setImagePreview(product.image || null);
    setIsDialogOpen(true);
  };

  const handleDeleteProduct = (id) => {
    deleteProduct(id);
    toast({
      title: 'Produk Dihapus',
      description: 'Produk telah berhasil dihapus dari daftar.',
      variant: 'destructive',
    });
  };
  
  const handleImageChange = (e) => {
      const file = e.target.files[0];
      if (file) {
          const reader = new FileReader();
          reader.onloadend = () => {
              setImagePreview(reader.result);
          };
          reader.readAsDataURL(file);
      }
  };

  const handleSaveProduct = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const productData = Object.fromEntries(formData.entries());
    
    const finalProductData = { ...productData, image: imagePreview };

    if (editingProduct) {
      updateProduct({ ...finalProductData, id: editingProduct.id });
      toast({
        title: 'Produk Diperbarui',
        description: 'Perubahan produk telah berhasil disimpan.',
      });
    } else {
      addProduct(finalProductData);
      toast({
        title: 'Produk Ditambahkan',
        description: 'Produk baru telah berhasil ditambahkan.',
      });
    }
    
    setIsDialogOpen(false);
    setEditingProduct(null);
    setImagePreview(null);
  };

  const formatRupiah = (number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(Number(number));
  };

  const defaultValues = useMemo(() => ({
    name: editingProduct?.name || '',
    category: editingProduct?.category || '',
    stock: editingProduct?.stock || '',
    price: editingProduct?.price || '',
    originalPrice: editingProduct?.originalPrice || '',
    description: editingProduct?.description || '',
    features: Array.isArray(editingProduct?.features) ? editingProduct.features.join(', ') : '',
  }), [editingProduct]);

  return (
    <>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Manajemen Produk</h1>
          <p className="text-muted-foreground">Kelola semua produk METARAK Anda di sini.</p>
        </div>
        <Button onClick={handleAddProduct} className="bg-primary hover:bg-primary/90">
          <PlusCircle className="mr-2 h-4 w-4" />
          Tambah Produk
        </Button>
      </div>
      <Card className="bg-muted/40 border-slate-800">
        <CardHeader>
          <CardTitle>Daftar Produk</CardTitle>
          <CardDescription>Total {products.length} produk.</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="hidden w-[100px] sm:table-cell">
                  <span className="sr-only">Gambar</span>
                </TableHead>
                <TableHead>Nama Produk</TableHead>
                <TableHead>Kategori</TableHead>
                <TableHead>Stok</TableHead>
                <TableHead>Harga</TableHead>
                <TableHead>
                  <span className="sr-only">Aksi</span>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {products.map((product) => (
                <TableRow key={product.id}>
                  <TableCell className="hidden sm:table-cell">
                    <img
                      alt={product.name}
                      className="aspect-square rounded-md object-cover"
                      height="64"
                      src={product.image || 'https://placehold.co/64x64'}
                      width="64"
                    />
                  </TableCell>
                  <TableCell className="font-medium">{product.name}</TableCell>
                  <TableCell>{product.category}</TableCell>
                  <TableCell>{product.stock}</TableCell>
                  <TableCell>{formatRupiah(product.price)}</TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button aria-haspopup="true" size="icon" variant="ghost">
                          <MoreHorizontal className="h-4 w-4" />
                          <span className="sr-only">Toggle menu</span>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Aksi</DropdownMenuLabel>
                        <DropdownMenuItem onClick={() => handleEditProduct(product)}>
                          Edit
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          className="text-red-500"
                          onClick={() => handleDeleteProduct(product.id)}
                        >
                          Hapus
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-[800px] bg-slate-900 border-slate-800">
          <form onSubmit={handleSaveProduct}>
            <DialogHeader>
              <DialogTitle>{editingProduct ? 'Edit Produk' : 'Tambah Produk Baru'}</DialogTitle>
            </DialogHeader>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-4">
              <div className="space-y-4">
                <Card className="overflow-hidden bg-muted/40 border-slate-700">
                  <CardHeader>
                      <CardTitle>Gambar Produk</CardTitle>
                  </CardHeader>
                  <CardContent>
                      <div className="grid gap-2">
                          <img
                              alt="Product"
                              className="aspect-square w-full rounded-md object-cover"
                              height="300"
                              src={imagePreview || "https://placehold.co/300x300"}
                              width="300"
                          />
                          <div className="grid grid-cols-1 gap-2">
                              <Button size="sm" variant="outline" type="button" onClick={() => fileInputRef.current?.click()}>
                                  <Upload className="h-3.5 w-3.5 mr-2" />
                                  Unggah Gambar
                              </Button>
                              <Input ref={fileInputRef} type="file" className="hidden" accept="image/*" onChange={handleImageChange} />
                          </div>
                      </div>
                  </CardContent>
                </Card>
              </div>
              <div className="space-y-4">
                <div className="grid gap-2">
                  <Label htmlFor="name">Nama</Label>
                  <Input id="name" name="name" defaultValue={defaultValues.name} required />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="category">Kategori</Label>
                  <Input id="category" name="category" defaultValue={defaultValues.category} required />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="stock">Stok</Label>
                    <Input id="stock" name="stock" type="number" defaultValue={defaultValues.stock} required />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="price">Harga</Label>
                    <Input id="price" name="price" type="number" defaultValue={defaultValues.price} required />
                  </div>
                </div>
                 <div className="grid gap-2">
                  <Label htmlFor="originalPrice">Harga Asli</Label>
                  <Input id="originalPrice" name="originalPrice" type="number" defaultValue={defaultValues.originalPrice} />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="description">Deskripsi</Label>
                  <Input id="description" name="description" defaultValue={defaultValues.description} />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="features">Fitur (pisahkan dengan koma)</Label>
                  <Input id="features" name="features" defaultValue={defaultValues.features} placeholder="Fitur 1, Fitur 2,..." />
                </div>
              </div>
            </div>
            <DialogFooter>
              <Button type="button" variant="outline" onClick={() => setIsDialogOpen(false)}>Batal</Button>
              <Button type="submit">Simpan</Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ProductManagement;
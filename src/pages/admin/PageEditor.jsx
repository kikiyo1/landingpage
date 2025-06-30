import React, { useState } from 'react';
import { useLandingPageContent } from '@/context/LandingPageContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/components/ui/use-toast';
import { Save } from 'lucide-react';

const PageEditor = () => {
  const { content, updateContent } = useLandingPageContent();
  const [formData, setFormData] = useState(content);
  const { toast } = useToast();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateContent(formData);
    toast({
      title: "Sukses!",
      description: "Konten halaman landing telah diperbarui.",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Editor Halaman Landing</h1>
          <p className="text-muted-foreground">Ubah konten yang tampil di halaman utama Anda.</p>
        </div>
        <Button type="submit">
          <Save className="mr-2 h-4 w-4" />
          Simpan Perubahan
        </Button>
      </div>

      <div className="grid gap-6">
        <Card className="bg-muted/40 border-slate-800">
          <CardHeader>
            <CardTitle>Bagian Hero</CardTitle>
            <CardDescription>Atur judul utama, subjudul, dan teks tombol di bagian atas halaman.</CardDescription>
          </CardHeader>
          <CardContent className="grid md:grid-cols-2 gap-6">
            <div className="grid gap-2">
              <Label htmlFor="heroTitle1">Judul Utama (Baris 1)</Label>
              <Input id="heroTitle1" name="heroTitle1" value={formData.heroTitle1} onChange={handleChange} />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="heroTitle2">Judul Utama (Baris 2)</Label>
              <Input id="heroTitle2" name="heroTitle2" value={formData.heroTitle2} onChange={handleChange} />
            </div>
            <div className="grid gap-2 md:col-span-2">
              <Label htmlFor="heroSubtitle">Subjudul</Label>
              <Input id="heroSubtitle" name="heroSubtitle" value={formData.heroSubtitle} onChange={handleChange} />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="heroButton1">Teks Tombol Utama</Label>
              <Input id="heroButton1" name="heroButton1" value={formData.heroButton1} onChange={handleChange} />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="heroButton2">Teks Tombol Sekunder</Label>
              <Input id="heroButton2" name="heroButton2" value={formData.heroButton2} onChange={handleChange} />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-muted/40 border-slate-800">
          <CardHeader>
            <CardTitle>Bagian Produk</CardTitle>
            <CardDescription>Atur judul dan subjudul untuk bagian katalog produk.</CardDescription>
          </CardHeader>
          <CardContent className="grid md:grid-cols-2 gap-6">
            <div className="grid gap-2">
              <Label htmlFor="productsTitle">Judul Bagian Produk</Label>
              <Input id="productsTitle" name="productsTitle" value={formData.productsTitle} onChange={handleChange} />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="productsSubtitle">Subjudul Bagian Produk</Label>
              <Input id="productsSubtitle" name="productsSubtitle" value={formData.productsSubtitle} onChange={handleChange} />
            </div>
          </CardContent>
        </Card>
      </div>
    </form>
  );
};

export default PageEditor;

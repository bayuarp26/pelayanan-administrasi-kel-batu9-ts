import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";


const Services = () => {
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10 place-content-center">
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <h2 className="text-3xl font-bold leading-tight tracking-tighter md:text-4xl top-10">
          Pelayanan
        </h2>
      </div>
      <div className="flex-initial">
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Jenis Dokumen" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="SKU">Surat Keterangan Usaha</SelectItem>
            <SelectItem value="SKTM">Surat Keterangan Tidak Mampu</SelectItem>
            <SelectItem value="BPJS">
              Badan Penyelenggara Jaminan Sosial
            </SelectItem>
            <SelectItem value="Surat Kematian">Surat Kematian</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="grid w-full max-w-sm items-center gap-1 place-content-center">
        <Label htmlFor="name">Nama</Label>
        <Input type="text" id="name" placeholder="Nama" />
      </div>
      <div className="grid w-full max-w-sm items-center gap-1 place-content-center">
        <Label htmlFor="email">Email</Label>
        <Input type="email" id="email" placeholder="Email" />
        <p className="text-sm text-muted-foreground">
          Masukkan alamat email anda.
        </p>
      </div>
      <div className="grid w-full max-w-sm items-center gap-1 place-content-center">
        <Label htmlFor="phone">Nomor Telepon/WhatsApp</Label>
        <Input type="text" id="phone" placeholder="Phone" />
        <p className="text-sm text-muted-foreground">
          Masukkan nomor telepon.
        </p>
      </div>
    </section>
  );
}

export default Services;

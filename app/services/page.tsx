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
import { Pond } from "@/components/pond/pond";


const Services = () => {
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <h2 className="text-3xl font-bold leading-tight tracking-tighter md:text-4xl top-10">
          Pelayanan
        </h2>
         <div className="flex max-w-[980px] flex-col items-start gap-2 absolute top-15 right-6 center top-1/4 ">
        <p className="max-w-[700px] text-lg text-muted-foreground">
          Akses kemudahan mengurus administrasi dengan website Kelurahan Batu 9. Ajukan surat keterangan, unggah dokumen, dan terima pemberitahuan melalui email atau SMS.
          Temukan solusi efisien untuk keperluan administratif Anda dengan mengunjungi web Kelurahan Batu 9 sekarang<br className="hidden sm:inline" />
          Warga dapat mengajukan permohonan dan mengunggah dokumen melalui website ini.
          Setelah diproses oleh petugas kelurahan, warga akan diberitahu melalui email atau SMS dan dapat mengambil surat di kantor kelurahan.
          Portal ini memudahkan warga mengurus administrasi dengan hemat waktu dan biaya.
        </p>
      </div>
      </div>
      <div className="flex-items">
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
        <Label className="w-96" htmlFor="name">Nama</Label>
        <Input type="text" id="name" placeholder="Nama" />
      </div>
      <div className="grid w-full max-w-sm items-center gap-1 place-content-center">
        <Label className="w-96" htmlFor="email">Email</Label>
        <Input type="email" id="email" placeholder="Email" />
        <p className="text-sm text-muted-foreground">
          Masukkan alamat email anda.
        </p>
      </div>
      <div className="grid w-full max-w-sm items-center gap-1 place-content-center">
        <Label className="w-96" htmlFor="phone">Nomor Telepon/WhatsApp</Label>
        <Input type="text" id="phone" placeholder="Phone" />
        <p className="text-sm text-muted-foreground">
          Masukkan nomor telepon.
        </p>
      </div>
      <div className="place-content-center w-96">
        <Pond />
        </div>
    </section>
  );
}

export default Services;
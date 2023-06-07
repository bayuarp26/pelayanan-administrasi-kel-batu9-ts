import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"

export default function IndexPage() {
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <div className="flex max-w-[980px] flex-col items-start gap-2 absolute top-15 right-6 ">
         <img src="/people.png" alt="people" className="w-full max-w-[500px]" />
         </div>
    
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
          Portal administrasi di kelurahan Batu 9 
        </h1>
        <p className="max-w-[700px] text-lg text-muted-foreground">
          Akses kemudahan mengurus administrasi dengan website Kelurahan Batu 9. Ajukan surat keterangan, unggah dokumen, dan terima pemberitahuan melalui email atau SMS. 
          Temukan solusi efisien untuk keperluan administratif Anda dengan mengunjungi web Kelurahan Batu 9 sekarang<br className="hidden sm:inline" /> 
					Warga dapat mengajukan permohonan dan mengunggah dokumen melalui website ini. 
					Setelah diproses oleh petugas kelurahan, warga akan diberitahu melalui email atau SMS dan dapat mengambil surat di kantor kelurahan. 
					Portal ini memudahkan warga mengurus administrasi dengan hemat waktu dan biaya.
        </p>
      </div>
     
      <div className="flex gap-4">
        <Link
          href={siteConfig.links.main}
          target="_blank"
          rel="noreferrer"
          className={buttonVariants()}
        >
          Utama
        </Link>
        <Link
          target="_blank"
          rel="noreferrer"
          href={siteConfig.links.profile}
          className={buttonVariants({ variant: "outline" })}
        >
          Profile
        </Link>
      </div>
    </section>
  )
}

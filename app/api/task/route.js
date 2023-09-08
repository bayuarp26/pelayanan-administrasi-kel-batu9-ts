import connectMongoDB from "@/libs/mongodb";
import Task from "@/models/Task";
import multer from "multer";
import { NextResponse } from "next/server";

// define the file upload fields
const fileFields = ["File_pdf"];

// create a new Multer instance
const upload = multer({
   // define which fields are allowed to be uploaded
   fields: fileFields,

   // define the directory where the uploaded files will be saved
   // in this case, the files will be saved to the `uploads` directory
   dest: path.join(__dirname, "uploads"),
});

export async function POST(request) {
    const { Jenis_dokumen,Nama,Email,Nomor_telepon } = await request.json();
    const formData = await request.formData();

    // get the file from the request
    const file = formData.get("File_pdf");

    // save the file to the database
    await connectMongoDB();
    await Task.create({
       Jenis_dokumen,
       Nama,
       Email,
       Nomor_telepon,
       File_pdf: file.buffer,
   });

    // return the success response
    return NextResponse.json({
       success: true,
       task: task,
   });
}

export async function GET() {
    try {
        await connectMongoDB();
        const tasks = await Task.find();
        return NextResponse.json({ tasks });
    } catch (error) {
        console.error("Error:", error);
        return NextResponse.json({ message: "Error retrieving tasks" }, { status: 500 });
    }
}

export async function DELETE(request) {
    try {
        const id = request.nextUrl.searchParams.get("id");
        await connectMongoDB();
        await Task.findByIdAndDelete(id);
        return NextResponse.json({ message: "Task deleted" }, { status: 200 });
    } catch (error) {
        console.error("Error:", error);
        return NextResponse.json({ message: "Error deleting task" }, { status: 500 });
    }
}

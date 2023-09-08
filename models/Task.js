import mongoose, { Schema } from "mongoose";

const taskSchema = new Schema(
    {
        Jenis_dokumen: String,
        Nama: String,
        Email: String,
        Nomor_telepon: String,
        File_pdf: mongoose.Schema.Types.Binary,
    },
    {
        timestamps: true,
    }
);

const Task = mongoose.models.Task || mongoose.model("Task", taskSchema);

export default Task;

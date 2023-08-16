import connectMongoDB from "@/libs/mongodb";
import Task from "@/models/Task";
import { NextResponse } from "next/server";

export async function PUT(request, { params }) {
    const { id } = params;
    const {newTitle: title, newDescription: description} = await request.json();
    await connectMongoDB();
    await Task.findByIdAndUpdate(id, {title, description});
    return NextResponse.json({ message: "Task updated" }, { status: 200 });
}
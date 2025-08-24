import { ArrowLeftIcon } from "lucide-react";
import { Link, useNavigate } from "react-router";
import LabeledInput from "../components/LabeledInput";
import LabeledTextArea from "../components/LabeledTextArea";
import useCreateNote from "../hooks/useCreateNote";
import toast from "react-hot-toast";

// react hook form and yup
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import type { NoteForm } from "../types/types";

const CreateNote = () => {
  const schema = yup.object({
    title: yup.string().required("Title is required").trim(),
    content: yup.string().required("Content is required").trim(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const navigate = useNavigate();
  const { mutate: createNote, isPending } = useCreateNote();

  const submit = (data: NoteForm) => {
    createNote(data, {
      onSuccess: () => {
        toast.success("Note created successfully");
        navigate("/");
      },
      onError: (err) => {
        if (err?.response?.status === 429) {
          return toast.error("Too many requests! Please try again later.");
        }
        toast.error(err.message);
      },
    });
  };

  return (
    <div className="min-h-screen bg-base-200 px-4 py-8">
      <div className="max-w-xl mx-auto">
        <Link to="/" className="btn btn-ghost mb-6">
          <ArrowLeftIcon className="size-5" />
          <span>Back to Notes</span>
        </Link>
        <div className="card bg-base-100">
          <div className="card-body ">
            <h2 className="card-title text-xl mb-4">Create New Note</h2>
            <form
              className="flex flex-col gap-8"
              onSubmit={handleSubmit(submit)}
            >
              <LabeledInput
                label="Title"
                type="text"
                placeholder="Note Title"
                register={register("title")}
                error={errors.title?.message}
              />
              <LabeledTextArea
                label="Content"
                placeholder="Write your note here..."
                register={register("content")}
                error={errors.content?.message}
              />
              <div className="card-actions justify-end">
                <button className="btn btn-primary" disabled={isPending}>
                  {isPending ? "Creating..." : "Create Note"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateNote;

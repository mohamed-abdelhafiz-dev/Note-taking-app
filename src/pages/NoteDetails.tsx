import { ArrowLeftIcon, Trash2Icon } from "lucide-react";
import { Link, useNavigate, useParams } from "react-router";
import LabeledInput from "../components/LabeledInput";
import LabeledTextArea from "../components/LabeledTextArea";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import useGetNote from "../hooks/useGetNote";
import type { NoteForm } from "../types/types";
import useDeleteNote from "../hooks/useDeleteNote";
import toast from "react-hot-toast";
import useUpdateNote from "../hooks/useUpdateNote";
import { useEffect } from "react";
import confirm from "../utils/confirmationAlert.tsx";

const NoteDetails = () => {
  const { id } = useParams();
  const { data } = useGetNote(id);

  const navigate = useNavigate();

  const schema = yup.object({
    title: yup.string().required("Title is required").trim(),
    content: yup.string().required("Content is required").trim(),
  });
  const {
    register,
    handleSubmit,
    formState: { errors, dirtyFields },
    setValue,
  } = useForm({
    resolver: yupResolver(schema),
  });
  const { mutate: updateNote, isPending } = useUpdateNote();
  const saveChanges = (data: NoteForm) => {
    if (!dirtyFields.title && !dirtyFields.content) return;
    updateNote(
      { id, note: data },
      {
        onSuccess: () => {
          toast.success("Note updated successfully");
          navigate("/");
        },
        onError: (err) => {
          if (err?.response?.status === 429) {
            return toast.error("Too many requests! Please try again later.");
          }
          toast.error(err.message);
        },
      }
    );
  };

  const { mutate: deleteNote } = useDeleteNote();

  const handleDelete = () => {
    confirm("Are you sure you want to delete this note?", () => {
      deleteNote(id, {
        onSuccess: () => {
          toast.success("Note deleted successfully");
          navigate("/");
        },
        onError: (err) => {
          if (err?.response?.status === 429) {
            return toast.error("Too many requests! Please try again later.");
          }
          toast.error(err.message);
        },
      });
    });
  };

  useEffect(() => {
    if (data) {
      setValue("title", data.title);
      setValue("content", data.content);
    }
  }, [data, setValue]);

  return (
    <div className="min-h-screen bg-base-200 px-4 py-8">
      <div className="max-w-xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <Link to="/" className="btn btn-ghost">
            <ArrowLeftIcon className="h-5 w-5" />
            Back to Notes
          </Link>
          <button onClick={handleDelete} className="btn btn-error btn-outline">
            <Trash2Icon className="h-5 w-5" />
            Delete Note
          </button>
        </div>

        <div className="card bg-base-100">
          <div className="card-body flex flex-col gap-8">
            <LabeledInput
              label="Title"
              placeholder="Note title"
              type="text"
              defaultValue={data?.title}
              register={register("title")}
              error={errors.title?.message}
            />

            <LabeledTextArea
              label="Content"
              placeholder="Write your content here..."
              defaultValue={data?.content}
              register={register("content")}
              error={errors.content?.message}
            />

            <div className="card-actions justify-end">
              <button
                className="btn btn-primary"
                onClick={handleSubmit(saveChanges)}
                disabled={isPending}
              >
                {isPending ? "Saving..." : "Save Changes"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoteDetails;

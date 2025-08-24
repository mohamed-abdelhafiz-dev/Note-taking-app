import toast from "react-hot-toast";

const confirm = (message: string, onConfirm: () => void) => {
  toast(
    (t) => (
      <div className="flex flex-col gap-2">
        <span>{message}</span>
        <div className="flex gap-2 justify-end">
          <button
            className="btn btn-sm btn-error"
            onClick={() => {
              toast.dismiss(t.id);
              onConfirm();
            }}
          >
            Yes
          </button>
          <button className="btn btn-sm" onClick={() => toast.dismiss(t.id)}>
            No
          </button>
        </div>
      </div>
    ),
    {
      duration: Infinity,
    }
  );
};

export default confirm;

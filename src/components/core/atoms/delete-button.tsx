import { toast } from "sonner";

export default function DeleteButton({ id }: { id: string }) {
    const handleDelete = async () => {
        const auth = document.getElementById("auth") as HTMLInputElement;

        if (!auth.value) return toast.warning("Enter the authentication code.");

        const res = await fetch("/api/cloudflare", {
            method: "DELETE",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ id, authentication: auth.value }),
        });

        const data = await res.json();

        if (res.ok) {
            toast.success("Rule successfully deleted.");
            setTimeout(() => location.reload(), 1000);
        } else {
            toast.error("Error deleting: " + data.message);
        }
    };

    return (
        <>
            <button
                type="button"
                className="bg-red-600 hover:bg-red-700 text-white rounded px-4 py-1 transition"
                onClick={handleDelete}
            >
                Delete
            </button>
        </>
    );
}

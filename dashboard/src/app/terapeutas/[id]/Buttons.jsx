"use client";
import axios from "axios";
import { useRouter } from "next/navigation";

function Buttons({ terapeutaId }) {
  const router = useRouter();

  return (
    <div className="flex gap-x-2 justify-end mt-2">
      <button
        className="text-white bg-red-500 py-2 px-3 rounded"
        onClick={async () => {
          if (confirm("Esta seguro que quiere eliminar a la terapeuta?")) {
            const res = await axios.delete("/api/terapeutas/" + terapeutaId);
            if (res.status === 204) {
              router.push("/terapeutas");
              router.refresh();
            }
          }
        }}
      >
        delete
      </button>
      <button
        className="text-white bg-gray-500 py-2 px-3 rounded"
        onClick={() => router.push(`/terapeutas/edit/${terapeutaId}`)}
      >
        edit
      </button>
    </div>
  );
}

export default Buttons;

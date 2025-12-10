import { createRoot } from "react-dom/client";
import "./global.css";
import Dashboard from "./pages/dashboard";
import { Toaster } from "sonner";
import { Check, XIcon } from "lucide-react";
createRoot(document.getElementById("root")!).render(
  <>
    <Dashboard />
    <Toaster
      position="bottom-center"
      icons={{
        error: <XIcon className="size-4  bg-red-600 rounded-full  text-white p-0.5" />,
        success : <Check className="size-4  bg-green-600 rounded-full  text-white p-0.5"  />
      }}
    />
  </>
);

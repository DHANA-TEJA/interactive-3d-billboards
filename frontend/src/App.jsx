import { useState } from "react";
import Landing from "./components/Landing";
import Interaction from "./components/Interaction";
import UserForm from "./components/UserForm";
import ThankYou from "./components/ThankYou";

export default function App() {
  const [step, setStep] = useState(1);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-700 to-indigo-900 text-white">
      {step === 1 && <Landing onNext={() => setStep(2)} />}
      {step === 2 && <Interaction onNext={() => setStep(3)} />}
      {step === 3 && <UserForm onNext={() => setStep(4)} />}
      {step === 4 && <ThankYou />}
    </div>
  );
}

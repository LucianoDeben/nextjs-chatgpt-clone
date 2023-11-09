import { BoltIcon } from "@heroicons/react/20/solid";
import { SunIcon } from "@heroicons/react/24/outline";
import { ExclamationTriangleIcon } from "@heroicons/react/24/solid";

export default function Home() {
  return (
    <div className="text-white flex flex-col items-center justify-center h-screen px-2">
      <h1 className="text-5xl font-bold mb-20">ChatGPT Clone</h1>
      <div className="flex space-x-2 text-center justify-center">
        <div className="">
          <div className="flex flex-col items-center justify-center mb-5">
            <SunIcon className="h-8 w-8"></SunIcon>
            <h2>Examples</h2>
          </div>
          <div className="space-y-2">
            <p className="infoText">Explain Something to me?</p>
            <p className="infoText">
              What is the difference between a dog and a cat?
            </p>
            <p className="infoText">What is the color of the sun?</p>
          </div>
        </div>
        <div className="">
          <div className="flex flex-col items-center justify-center mb-5">
            <BoltIcon className="h-8 w-8"></BoltIcon>
            <h2>Capabilities</h2>
          </div>
          <div className="space-y-2">
            <p className="infoText">Explain Something to me?</p>
            <p className="infoText">
              What is the difference between a dog and a cat?
            </p>
            <p className="infoText">What is the color of the sun?</p>
          </div>
        </div>
        <div className="">
          <div className="flex flex-col items-center justify-center mb-5">
            <ExclamationTriangleIcon className="h-8 w-8"></ExclamationTriangleIcon>
            <h2>Limitations</h2>
          </div>
          <div className="space-y-2">
            <p className="infoText">Explain Something to me?</p>
            <p className="infoText">
              What is the difference between a dog and a cat?
            </p>
            <p className="infoText">What is the color of the sun?</p>
          </div>
        </div>
      </div>
    </div>
  );
}

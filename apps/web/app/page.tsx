import { Button, Header } from "ui";
import fixtures from "../fixtures/copywriting.json";

function getWordFrom(text: string, index: number) {
  return text.split(" ").slice(0, index).join(" ");
}
export default function Page() {
  return (
    <>
      <Header text="launchcg.com" />
      <div className="container mx-auto p-4 gap-1">
        <div className="space-y-4 max-w-[40rem]">
          <p className="text-xs drop-shadow drop-shadow-white uppercase text-slate-500 font-medium">
            {getWordFrom(fixtures.kicker, 3)}
          </p>
          <h1 className="text-4xl font-medium text-slate-900 tracking-tight">
            {fixtures.headline}
          </h1>
          <p className="text-slate-800">{fixtures.lorem}</p>
          <p className="text-sm text-slate-500">{fixtures.lorem}</p>
          <p className="text-xs text-slate-400">{fixtures.lorem}</p>
          <Button />
        </div>
      </div>
    </>
  );
}

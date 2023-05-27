import { Button, Header } from "ui";

export default function Page() {
  return (
    <>
      <Header text="darin.co" />
      <div className="container mx-auto py-4 gap-1">
        <div className="prose">
          <p>Welcome to the party</p>
          <Button />
        </div>
      </div>
    </>
  );
}

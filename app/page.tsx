import Input from "./components/Input";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-8 md:p-12 lg:p-24">
      <div className="space-y-3 text-center">
        <h1 className="text-5xl font-semibold text-white">Next ToDo</h1>
        <p className="text-white font-medium text-xl">
          Create and Track Your Todos
        </p>
      </div>
      <Input></Input>
    </main>
  );
}

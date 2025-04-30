import MailForm from "@/components/MailForm/MailForm";

export default function Home() {
  return (
    // <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
    <main className="min-h-screen flex flex-col gap-[32px] items-center mt-20">
      <h2 className="text-2xl font-semibold mb-4">お問い合わせフォーム</h2>
      <MailForm />
    </main>
    // </div >
  );
}

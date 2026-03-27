import { Header } from "@/components/Header";
import { MinimalFooter } from "@/components/MinimalFooter";
import { ContactForm } from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <main className="relative min-h-screen bg-carbon selection:bg-emerald-500 selection:text-white">
      <Header />
      <ContactForm />
      <MinimalFooter />
    </main>
  );
}

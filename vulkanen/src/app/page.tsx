import Image from "next/image";
import TextType from "~/components/TextType";

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-white">
      <section className="container px-4 py-24 text-center">
        <div className="relative px-4 md:px-8 lg:px-12 mt-16 max-w-6xl mx-auto">
          <Image
            src="/ægte-vulkan-ørding-no-text.png"
            alt="Vulkanen Hero"
            width={1920}
            height={1080}
            className="w-full h-auto rounded-2xl"
            priority
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <TextType
              text="Hjemmeside på vej"
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-white drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)]"
              typingSpeed={100}
              loop={false}
              showCursor={true}
              cursorCharacter="|"
            />
          </div>
        </div>
      </section>
    </main>
  );
}

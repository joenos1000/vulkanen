import Image from "next/image";
import TextType from "~/components/TextType";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <section className="container mx-auto px-4 py-24">
        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 text-center mt-16">
          Velkommen til Vulkanen på Mors
        </h1>

        {/* Hero Image */}
        <div className="relative max-w-4xl mx-auto mb-16">
          <Image
            src="/ægte-vulkan-ørding-no-text.png"
            alt="Vulkanen Hero"
            width={1920}
            height={1080}
            className="w-full h-auto rounded-2xl"
            priority
          />
          {/* Temporarily hidden - can be restored later */}
          {/* <div className="absolute inset-0 flex items-center justify-center">
            <TextType
              text="Hjemmeside på vej"
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-white drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)]"
              typingSpeed={100}
              loop={false}
              showCursor={true}
              cursorCharacter="|"
            />
          </div> */}
        </div>

        {/* Content Section */}
        <div className="max-w-4xl mx-auto px-4 md:px-8">

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Hvad er Vulkanen?
            </h2>
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="flex-1">
                <p className="text-lg text-gray-700 mb-4">
                  Vulkanen er et billede på noget sprudlende og vildt – noget utæmmeligt med en indre varme. Man ved aldrig, hvornår der kommer et nyt uforudsigeligt udbrud af fantastiske idéer, der bare må prøves af.
                </p>
                <p className="text-lg text-gray-700">
                  I de gamle, karakteristiske bygninger i Ørding samler vi mange af øens foreningsaktiviteter under ét tag. Her skaber vi et levende fællesskab omkring kreativitet, læring og oplevelser for alle aldre.
                </p>
              </div>
              <div className="flex-shrink-0">
                <Image
                  src="/VULKANEN-ICON-LOGO.png"
                  alt="Vulkanen Logo"
                  width={200}
                  height={200}
                  className="w-32 h-32 md:w-40 md:h-40 rounded-lg"
                />
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Vores Vision
            </h2>
            <p className="text-lg text-gray-700">
              Vi vil <strong>genoplive</strong> disse fantastiske bygninger, der emmer af kreativitet og udfoldelsesmuligheder. Vulkanen skal være det fælles tredje, der binder Mors sammen og styrker vores lokale fællesskab – et sted hvor børn, unge og ældre igen kan mødes og skabe sammen.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Hvad Tilbyder Vi?
            </h2>

            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                  🚴 Velo Mors - Cykeloplevelser
                </h3>
                <p className="text-lg text-gray-700">
                  I samarbejde med Morsø Turistkontor opgraderer vi cykelturismen på Mors gennem vores cykelunivers.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                  🎨 Værk - Den Kreative Skole
                </h3>
                <p className="text-lg text-gray-700">
                  Rammer for workshops på enkeltdage, weekender og ferier, hvor kunstnere kan leje Vulkanen både indendørs og udendørs – naturligvis med forplejning.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                  🏠 Overnatning
                </h3>
                <ul className="list-disc list-inside text-lg text-gray-700 space-y-2">
                  <li>30 sovepladser til workshops og Air B&B</li>
                  <li>Vandrehjem for hele familien</li>
                  <li>Adgang til gymnastiksal, udendørs legeplads og bålhytte</li>
                  <li>Stellplads for autocampere i skolegården med bad og tøjvaskmuligheder</li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                  🍽️ Mad & Fællesskab
                </h3>
                <ul className="list-disc list-inside text-lg text-gray-700 space-y-2">
                  <li>Fællesspisning og madoplevelser</li>
                  <li>Kaffe-brygning på højeste niveau</li>
                  <li>Snapselaug og bagekonkurrencer</li>
                  <li>Support til &quot;Ørding Foodtrucks&quot; via vores professionelle køkken</li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                  🛒 Lokal Handel
                </h3>
                <p className="text-lg text-gray-700">
                  Vi styrker Ørding Købmandsgaard og sikrer butikkens overlevelse gennem øget aktivitet i området.
                </p>
              </div>
            </div>
          </section>

          <hr className="my-12 border-gray-300" />

          <p className="text-xl text-center text-gray-800 font-semibold">
            <strong>Vulkanen på Mors</strong> – hvor kreativitet møder fællesskab, og hvor nye idéer sprudler frem hver dag.
          </p>
        </div>
      </section>
    </main>
  );
}

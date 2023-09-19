import Image from "next/image";

function MyProfilePic() {
  return (
    <section className="w-full mx-auto">
      <Image
        className="border-4 border-black
        dark:border-slate-500 drop-shadow-xl shadow-black rounded-full mx-auto mt-8"
        src="/images/photo_2023-02-09_17-36-23 (2).jpg"
        width={200}
        height={200}
        alt="Sina Haghshenas"
        priority={true}
      />
    </section>
  );
}

export default MyProfilePic;

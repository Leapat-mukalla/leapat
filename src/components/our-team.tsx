import { cn } from "@/lib/utils";
import Image from "next/image";

const members = [
  {
    name: "لؤي العمودي",
    role: "مؤسس ومدير تنفيذي",
    image: "/man1.png",
    social: {
      instagram: "",
      linkedin: "",
      x: "",
    },
  },
  {
    name: "علي بامحمد",
    role: "شريك مؤسس و مطور تطبيقات iOS",
    image: "/man2.png",
    social: {
      instagram: "",
      linkedin: "",
      x: "",
    },
  },
  {
    name: "ماجد بازبيدي",
    role: "شريك مؤسس و مطور ويب Back-End",
    image: "/man3.png",
    social: {
      instagram: "",
      linkedin: "",
      x: "",
    },
  },
  {
    name: "محمد الجفري",
    role: "شريك مؤسس و مطور ويب Front-End",
    image: "/man1.png",
    social: {
      instagram: "",
      linkedin: "",
      x: "",
    },
  },
  {
    name: "عيدروس العطاس",
    role: "منظم",
    image: "/man1.png",
    social: {
      instagram: "",
      linkedin: "",
      x: "",
    },
  },
  {
    name: "سهل وحدين",
    role: "منظم",
    image: "/man1.png",
    social: {
      instagram: "",
      linkedin: "",
      x: "",
    },
  },
  {
    name: "خالد البطاطي",
    role: "مطور ويب Back-End",
    image: "/man1.png",
    social: {
      instagram: "",
      linkedin: "",
      x: "",
    },
  },
];
export function OurTeam() {
  return (
    <section className="w-full bg-white py-20">
      <div className="container">
        <div className="flex items-baseline justify-center">
          <p className="text-4xl font-semibold leading-[54px] text-primary">
            فريقنا
          </p>
          <div className="h-[9px] w-14 rounded-[3px] bg-primary lg:w-[246px]"></div>
        </div>
        <p className="text-center text-6xl font-semibold leading-[80px] text-secondary">
          كادرنا العظيم
        </p>

        <div className="mt-40 flex gap-4 lg:gap-10">
          {members.map(({ name, role, social, image }, index) => (
            <div key={name}>
              <div className="relative aspect-square w-[250px] text-center">
                <Image
                  src={image}
                  alt={name}
                  width={250}
                  height={250}
                  className="relative z-10"
                />

                <h3 className="pb-2 pt-8 text-3xl font-semibold text-secondary">
                  {name}
                </h3>
                <p className="text-lg font-semibold text-[#A5A5A5]">{role}</p>
                <div
                  className={cn(
                    "absolute left-[59.5px] top-[140px] z-0 h-[102px] w-[131px] bg-[#986CAC] blur-3xl",
                    index % 2 !== 0 && "bg-[#75A3B1]",
                  )}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

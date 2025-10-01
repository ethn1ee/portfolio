import { ProjectList } from "@/components/project";

const Page = () => {
  return (
    <main className="pt-20 lg:pt-40 basis-full lg:basis-2/3 lg:border-r space-y-10">
      <h1 className="text-4xl lg:text-7xl mb-5 font-bold tracking-tight px-4 font-sans">
        TAEHOON LEE
      </h1>
      <p className="px-4 font-sans text-secondary text-lg leading-snug">
        I love experimenting in web.
        <br />I spend most of my time playing with my Kubernetes homelab,
        building cool CLIs in Go, making websites, or writing helix editor
        configs.
      </p>
      <ProjectList />
    </main>
  );
};

export default Page;

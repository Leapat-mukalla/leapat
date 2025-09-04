import BlogCard from "@/components/blog/blog-card";
import BlogSearchForm from "@/components/blog/blog-search-form";
import { HeroSection } from "@/components/hero-section";
import NoResults from "@/components/ui/no-results";
import React from "react";
import { getBlogs } from "@/lib/markdown";

interface BlogPageProps {
  searchParams: {
    search?: string;
  };
}

export default async function BlogPage({ searchParams }: BlogPageProps) {
  const allBlogs = await getBlogs();
  const searchQuery = searchParams.search?.toLowerCase().trim();

  const filteredBlogs = searchQuery
    ? allBlogs.filter(
        (blog) =>
          blog.data.title.toLowerCase().includes(searchQuery) ||
          blog.data.excerpt.toLowerCase().includes(searchQuery) ||
          blog.data.author.toLowerCase().includes(searchQuery) ||
          blog.data.category.toLowerCase().includes(searchQuery) ||
          blog.data.tags.some((tag) =>
            tag.toLowerCase().includes(searchQuery),
          ) ||
          blog.content.toLowerCase().includes(searchQuery),
      )
    : allBlogs;

  return (
    <>
      <HeroSection view="list" title="المقالات">
        <BlogSearchForm />
      </HeroSection>
      <section className="bg-background py-20">
        <div className="mx-auto max-w-[1100px]">
          {searchQuery && (
            <div className="mb-8 text-center">
              <p className="text-lg text-gray-600">
                {filteredBlogs.length} نتيجة للبحث عن `&quot;
                {searchParams.search}`&quot;
              </p>
            </div>
          )}

          {filteredBlogs.length > 0 ? (
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {filteredBlogs.map((blog) => (
                <BlogCard {...blog} key={blog.filePath} />
              ))}
            </div>
          ) : (
            <NoResults
              title={searchQuery ? "لا توجد نتائج" : "لا توجد مقالات متاحة"}
              message={
                searchQuery
                  ? "لم يتم العثور على مقالات تطابق بحثك. حاول استخدام كلمات بحث أخرى"
                  : "لا توجد مقالات متاحة حالياً. تحقق مرة أخرى لاحقاً"
              }
              buttonText="عودة لقائمة المقالات"
              buttonHref="/blog"
              searchQuery={searchQuery}
            />
          )}
        </div>

        {/* todo add pagination */}
      </section>
    </>
  );
}

import { Category, Course } from '@prisma/client';
import { ProductCard } from '@/components/product-card';

type CourseWithCategory = Course & {
    category: Category | null;
    chapters: { id: string }[];
};

interface CoursesListProps {
    items: CourseWithCategory[];
}

export const ProductsList = ({ items }: CoursesListProps) => {
    return (
        <div>
            <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-4">
                {items.map((item) => (
                    <ProductCard
                        key={item.id}
                        id={item.id}
                        title={item.title}
                        imageUrl={item.imageUrl!}
                        chaptersLength={item.chapters.length}
                        price={item.price!}
                        category={item?.category?.name!}
                    />
                ))}
            </div>
            {items.length === 0 && (
                <div className="text-center text-sm text-muted-foreground mt-10">
                    Pas de cours disponible
                </div>
            )}
        </div>
    );
};

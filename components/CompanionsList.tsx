import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn, getSubjectColor } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";

interface CompanionsListProps {
  title: string;
  companions?: Companion[];
  classNames?: string;
}

const CompanionsList = ({
  title,
  companions,
  classNames,
}: CompanionsListProps) => {
  return (
    <article className={cn("companion-list", classNames)}>
      <h2 className="font-bold text-3xl mb-6">{title}</h2>

      <div className="hidden md:block">
        {/* Desktop Table */}
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="text-lg w-2/3">Lessons</TableHead>
              <TableHead className="text-lg">Subject</TableHead>
              <TableHead className="text-lg text-right">Duration</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {companions?.map(
              ({ id, subject, name, topic, duration }, index) => (
                <TableRow key={index}>
                  <TableCell>
                    <Link href={`/companions/${id}`}>
                      <div className="flex items-center gap-2">
                        <div
                          className="size-[72px] flex items-center justify-center rounded-lg"
                          style={{ backgroundColor: getSubjectColor(subject) }}
                        >
                          <Image
                            src={`/icons/${subject}.svg`}
                            alt={subject}
                            width={35}
                            height={35}
                          />
                        </div>
                        <div className="flex flex-col gap-2">
                          <p className="font-bold text-2xl">{name}</p>
                          <p className="text-lg">{topic}</p>
                        </div>
                      </div>
                    </Link>
                  </TableCell>
                  <TableCell>
                    <div
                      className="subject-badge w-fit"
                      style={{
                        backgroundColor: getSubjectColor(subject),
                        color: "black",
                      }}
                    >
                      {subject}
                    </div>
                  </TableCell>
                  <TableCell className="text-right">
                    <p className="text-2xl">
                      {duration} <span>mins</span>
                    </p>
                  </TableCell>
                </TableRow>
              )
            )}
          </TableBody>
        </Table>
      </div>

      {/* Mobile List Format */}
      <div className="flex flex-col gap-4 md:hidden">
        {companions?.map(({ id, subject, name, topic, duration }, index) => (
          <Link
            key={index}
            href={`/companions/${id}`}
            className="border rounded-lg p-4 flex flex-col gap-3 shadow-sm"
          >
            <div className="flex items-center gap-3">
              <div
                className="w-12 h-12 flex items-center justify-center rounded-md"
                style={{ backgroundColor: getSubjectColor(subject) }}
              >
                <Image
                  src={`/icons/${subject}.svg`}
                  alt={subject}
                  width={24}
                  height={24}
                />
              </div>
              <div className="flex flex-col">
                <p className="font-semibold text-lg">{name}</p>
                <p className="text-sm text-muted-foreground">{topic}</p>
              </div>
            </div>
            <div className="flex justify-between items-center mt-2 text-sm">
              <div className="flex items-center gap-1">
                <Image
                  src="/icons/clock.svg"
                  alt="Duration"
                  width={14}
                  height={14}
                />
                <span>{duration} mins</span>
              </div>
              <div
                className="subject-badge text-xs px-2 py-1 rounded-md"
                style={{
                  backgroundColor: getSubjectColor(subject),
                  color: "black",
                }}
              >
                {subject}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </article>
  );
};

export default CompanionsList;

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface RelatedService {
  title: string;
  href: string;
  description: string;
}

interface RelatedServicesProps {
  title?: string;
  services: RelatedService[];
}

const RelatedServices = ({ title = "También puede interesarte", services }: RelatedServicesProps) => {
  return (
    <aside className="mt-10 rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] p-6 md:p-8">
      <h3 className="text-lg font-bold text-[#0F172A] mb-4">{title}</h3>
      <div className="grid gap-3 sm:grid-cols-2">
        {services.map((service, i) => (
          <Link
            key={i}
            href={service.href}
            className="group flex items-center justify-between rounded-xl border border-[#E2E8F0] bg-white p-4 hover:border-[#1080A0] hover:shadow-sm transition-all"
          >
            <div className="flex-1">
              <p className="text-sm font-semibold text-[#0F172A] group-hover:text-[#1080A0] transition-colors">{service.title}</p>
              <p className="text-xs text-[#64748B] mt-1">{service.description}</p>
            </div>
            <ArrowRight className="w-4 h-4 text-[#CBD5E1] group-hover:text-[#1080A0] transition-colors flex-shrink-0 ml-3" />
          </Link>
        ))}
      </div>
    </aside>
  );
};

export default RelatedServices;

import { useRef, useState } from 'react';
import ImageSlideshow from './ImageSlideshow';
import { ATTACHMENTS } from '../data/attachments';
import { ChevronLeft, ChevronRight } from './icons';
import { withBase } from '../lib/asset';

type Item = { code: string; title: string; desc: string };

const SECTION1_1: Item[] = [
  { code: '1.1', title: 'สร้างและหรือพัฒนาหลักสูตร', desc: 'จัดทำและพัฒนาหลักสูตรสถานศึกษากลุ่มสาระสุขศึกษาและพลศึกษาให้สอดคล้องกับหลักสูตรแกนกลางและบริบทของผู้เรียน' },
  { code: '1.2', title: 'ออกแบบการจัดการเรียนรู้', desc: 'ออกแบบแผนการจัดการเรียนรู้ที่เน้นผู้เรียนเป็นสำคัญครบทุกหน่วยการเรียนรู้ พร้อมสื่อประกอบที่เหมาะสมกับวัยผู้เรียน' },
  { code: '1.3', title: 'จัดกิจกรรมการเรียนรู้', desc: 'จัดกิจกรรมการเรียนรู้เชิงปฏิบัติที่ส่งเสริมทักษะการเคลื่อนไหวและสุขภาวะของผู้เรียนอย่างต่อเนื่อง' },
  { code: '1.4', title: 'การสร้างและการพัฒนาสื่อการจัดการเรียนการสอน', desc: 'จัดหาและพัฒนาอุปกรณ์กีฬา สนาม และสื่อการสอนที่เอื้อต่อการเรียนรู้ด้านพลศึกษา' },
  { code: '1.5', title: 'วัดและประเมินผลการเรียนรู้', desc: 'วัดและประเมินผลผู้เรียนด้วยเครื่องมือที่หลากหลาย สอดคล้องกับสมรรถนะและคุณลักษณะอันพึงประสงค์' },
  { code: '1.6', title: 'ศึกษาวิเคราะห์และสังเคราะห์', desc: 'วิเคราะห์และสังเคราะห์ผลการประเมินเพื่อนำไปพัฒนาการจัดการเรียนรู้อย่างเป็นระบบ' },
  { code: '1.7', title: 'การจัดบรรยากาศในชั้นเรียน', desc: 'จัดบรรยากาศการเรียนรู้ที่ปลอดภัย เอื้อต่อการเคลื่อนไหว และส่งเสริมวินัยในชั้นเรียน' },
  { code: '1.8', title: 'อบรมและพัฒนาคุณลักษณะที่ดีของผู้เรียน', desc: 'อบรมบ่มนิสัยด้านคุณธรรม จริยธรรม และค่านิยมที่ดีงามควบคู่กับกิจกรรมพลศึกษา' },
];

const SECTION1_2: Item[] = [
  { code: '2.1', title: 'การจัดทำข้อมูลสารสนเทศ', desc: 'จัดทำและใช้ข้อมูลสารสนเทศของผู้เรียนเพื่อวางแผนการดูแลช่วยเหลือและพัฒนาการเรียนรู้' },
  { code: '2.2', title: 'ดำเนินการตามระบบดูแลช่วยเหลือผู้เรียน', desc: 'ดำเนินงานระบบดูแลช่วยเหลือนักเรียนอย่างต่อเนื่อง ครอบคลุมด้านสุขภาพกายและสุขภาพจิต' },
  { code: '2.3', title: 'การปฏิบัติงานวิชาการและงานอื่น ๆ ของสถานศึกษา', desc: 'ปฏิบัติงานวิชาการและสนับสนุนภารกิจของสถานศึกษาอย่างเต็มความสามารถ' },
  { code: '2.4', title: 'ประสานความร่วมมือกับผู้ปกครอง ภาคีเครือข่ายหรือสถานประกอบการ', desc: 'ประสานความร่วมมือกับผู้ปกครองและภาคีเครือข่ายเพื่อส่งเสริมการเรียนรู้และพัฒนาผู้เรียนรอบด้าน' },
];

const SECTION3: Item[] = [
  { code: '3.1', title: 'การพัฒนาตนเองอย่างเป็นระบบ', desc: 'พัฒนาตนเองอย่างเป็นระบบผ่านการอบรมและศึกษาต่อเนื่องเพื่อยกระดับความเป็นครูมืออาชีพ' },
  { code: '3.2', title: 'การมีส่วนร่วมในการแลกเปลี่ยนเรียนรู้', desc: 'มีส่วนร่วมแลกเปลี่ยนเรียนรู้ทางวิชาชีพกับเพื่อนครูและเครือข่ายอย่างสม่ำเสมอ' },
  { code: '3.3', title: 'นำความรู้ความสามารถมาปรับใช้', desc: 'นำความรู้และประสบการณ์จากการพัฒนาตนเองมาปรับใช้ในการจัดการเรียนการสอนอย่างเป็นรูปธรรม' },
];

const SLIDESHOW_IMAGES = [
  withBase('/attachments/1.4/files/38519.jpg'),
  withBase('/attachments/1.3/files/IMG_0924.JPG'),
  withBase('/attachments/1.7/files/IMG_0925.JPG'),
  withBase('/attachments/3.1/files/6117f3df-6229-4a54-816e-dfdeddf70ed5.jpg'),
  withBase('/attachments/1.4/files/c405cdfe-a354-4c67-af7b-ed9bf4d48a5d.jpg'),
  withBase('/attachments/1.2/files/38520.jpg'),
];

function FileIcon({ type }: { type: string }) {
  if (type === 'pdf') {
    return (
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <path d="M14 2v6h6" />
      </svg>
    );
  }
  if (type === 'image') {
    return (
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <circle cx="8.5" cy="9.5" r="1.5" />
        <path d="M21 16l-5-5-9 9" />
      </svg>
    );
  }
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <path d="M14 2v6h6" />
      <path d="M9 15h6M9 12h6" />
    </svg>
  );
}

function DocCard({ code, title, desc }: Item) {
  const group = ATTACHMENTS[code];
  const files = group?.files ?? [];
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  const goTo = (i: number) => {
    const el = scrollerRef.current;
    if (!el) return;
    const clamped = Math.max(0, Math.min(files.length - 1, i));
    el.scrollTo({ left: clamped * el.clientWidth, behavior: 'smooth' });
    setActive(clamped);
  };

  const handleScroll = () => {
    const el = scrollerRef.current;
    if (!el || el.clientWidth === 0) return;
    const i = Math.round(el.scrollLeft / el.clientWidth);
    if (i !== active) setActive(i);
  };

  const current = files[active];

  return (
    <div className="liquid-glass rounded-[1.1rem] p-4 flex flex-col">
      <div className="flex items-center gap-2">
        <span className="liquid-glass rounded-full px-2.5 py-1 text-[11px] font-body text-white/90">
          {code}
        </span>
      </div>
      <h4 className="mt-3 text-sm md:text-[15px] font-body font-medium leading-snug min-h-[2.6em]">
        {title}
      </h4>
      <p className="mt-1 text-xs text-white/60 font-body leading-snug">
        {desc}
      </p>

      <div className="mt-3 relative bg-white rounded-lg overflow-hidden" style={{ height: '26rem' }}>
        {files.length === 0 ? (
          <div className="w-full h-full flex flex-col items-center justify-center gap-1.5 text-gray-400">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="4" width="18" height="16" rx="2" />
              <circle cx="8.5" cy="9.5" r="1.5" />
              <path d="M21 16l-5-5-9 9" />
            </svg>
            <span className="text-[11px] font-body">ไม่มีเอกสารแนบ</span>
          </div>
        ) : (
          <>
            <div
              ref={scrollerRef}
              onScroll={handleScroll}
              className="flex overflow-x-auto snap-x snap-mandatory h-full w-full no-scrollbar"
              style={{ scrollbarWidth: 'none' }}
            >
              {files.map((f, i) => (
                <div key={f.url} className="snap-center shrink-0 w-full h-full flex items-center justify-center bg-white">
                  {f.type === 'image' ? (
                    <img src={f.url} alt={f.name} className="max-w-full max-h-full object-contain" />
                  ) : f.type === 'pdf' ? (
                    Math.abs(i - active) <= 1 ? (
                      <iframe
                        src={`${f.url}#toolbar=1&view=FitH`}
                        title={f.name}
                        className="w-full h-full border-0"
                        loading="lazy"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-gray-300">
                        <FileIcon type="pdf" />
                      </div>
                    )
                  ) : (
                    <a
                      href={f.url}
                      download
                      className="flex flex-col items-center gap-2 text-gray-500 text-xs font-body px-3 text-center"
                    >
                      <FileIcon type={f.type} />
                      {f.name}
                    </a>
                  )}
                </div>
              ))}
            </div>

            {files.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={() => goTo(active - 1)}
                  className="absolute left-1 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-1"
                  aria-label="ก่อนหน้า"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  onClick={() => goTo(active + 1)}
                  className="absolute right-1 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-1"
                  aria-label="ถัดไป"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
                <div className="absolute bottom-1.5 left-0 right-0 flex justify-center gap-1">
                  {files.map((f, i) => (
                    <button
                      key={f.url}
                      type="button"
                      onClick={() => goTo(i)}
                      className={`h-1.5 rounded-full transition-all ${i === active ? 'w-4 bg-black/70' : 'w-1.5 bg-black/30'}`}
                      aria-label={`ไฟล์ที่ ${i + 1}`}
                    />
                  ))}
                </div>
              </>
            )}
          </>
        )}
      </div>

      {current && (
        <a
          href={current.url}
          target="_blank"
          rel="noreferrer"
          download
          className="mt-2 flex items-center gap-1.5 text-[11px] text-white/80 hover:text-white font-body truncate"
          title={current.name}
        >
          <FileIcon type={current.type} />
          <span className="truncate">{current.name}</span>
        </a>
      )}
    </div>
  );
}

export default function Capabilities() {
  return (
    <section id="documents" className="relative overflow-hidden bg-black">
      <div className="absolute inset-0 z-0">
        <img
          src={withBase("/section-bg.jpg")}
          alt=""
          className="w-full h-full object-cover"
          style={{ filter: 'blur(24px)', transform: 'scale(1.15)' }}
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>
      <ImageSlideshow images={SLIDESHOW_IMAGES} className="absolute inset-0 w-full h-full object-cover z-0" />

      <div className="relative z-10 px-5 sm:px-8 md:px-16 lg:px-20 pt-16 md:pt-24 pb-24">
        <div>
          <h3 className="font-heading italic text-3xl md:text-4xl tracking-[-1px]">
            ด้านที่ 1 ด้านการจัดการเรียนรู้
          </h3>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {SECTION1_1.map((item) => (
              <DocCard key={item.code} {...item} />
            ))}
          </div>
        </div>

        <div className="mt-16">
          <h3 className="font-heading italic text-3xl md:text-4xl tracking-[-1px]">
            ด้านที่ 2 ด้านการส่งเสริมและสนับสนุนการจัดการเรียนรู้
          </h3>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {SECTION1_2.map((item) => (
              <DocCard key={item.code} {...item} />
            ))}
          </div>
        </div>

        <div className="mt-16">
          <h3 className="font-heading italic text-3xl md:text-4xl tracking-[-1px]">
            ด้านที่ 3 การพัฒนาตนเองและวิชาชีพ
          </h3>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {SECTION3.map((item) => (
              <DocCard key={item.code} {...item} />
            ))}
          </div>
        </div>

        <div className="mt-24 pt-8 border-t border-white/10 flex flex-col items-center gap-2 text-center">
          <p className="text-xs text-white/60 font-body">
            โรงเรียนชุมชนบ้านปากชม สำนักงานเขตพื้นที่การศึกษาประถมศึกษาเลย เขต 1
          </p>
          <p className="text-xs text-white/40 font-body">
            ประจำปีงบประมาณ พ.ศ. 2569 · ระหว่างวันที่ 1 ตุลาคม 2568 – 30 กันยายน 2569
          </p>
        </div>
      </div>
    </section>
  );
}

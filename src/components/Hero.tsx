import { motion } from 'framer-motion';
import FadingVideo from './FadingVideo';
import BlurText from './BlurText';
import { ArrowUpRight, UserIcon } from './icons';
import { withBase } from '../lib/asset';

const fadeBlur = {
  initial: { filter: 'blur(10px)', opacity: 0, y: 20 },
  animate: { filter: 'blur(0px)', opacity: 1, y: 0 },
};

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-black">
      <div className="absolute inset-0 z-0">
        <img
          src={withBase("/section-bg.jpg")}
          alt=""
          className="w-full h-full object-cover"
          style={{ filter: 'blur(24px)', transform: 'scale(1.15)' }}
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>
      <FadingVideo
        src={[
          withBase('/videos/video1_field.mp4'),
          withBase('/videos/video2_gym.mp4'),
        ]}
        className="absolute left-1/2 top-0 -translate-x-1/2 object-cover object-top z-0"
        style={{ width: '120%', height: '120%' }}
      />

      <div className="relative z-10 flex flex-col h-full">
        {/* Main content */}
        <div className="flex-1 flex flex-col items-center justify-center px-4 py-10 text-center text-outline">
          <motion.div
            initial={fadeBlur.initial}
            animate={fadeBlur.animate}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.4 }}
            className="liquid-glass rounded-full flex items-center gap-2 px-1.5 py-1.5 pr-4"
          >
            <span className="bg-white text-black text-sm font-medium px-3.5 py-1 rounded-full" style={{ textShadow: 'none' }}>
              ปีงบประมาณ 2569
            </span>
            <span className="text-base text-white/90 font-body">
              แบบข้อตกลงในการพัฒนางาน (PA) สำหรับตำแหน่งครู
            </span>
          </motion.div>

          <div className="mt-6 max-w-4xl">
            <BlurText
              text="แบบข้อตกลงในการพัฒนางาน (PA)"
              className="text-5xl sm:text-6xl md:text-8xl lg:text-[6.5rem] font-heading italic text-white leading-[0.95] md:leading-[0.85] tracking-[-2px] md:tracking-[-4px]"
            />
          </div>

          <motion.p
            initial={fadeBlur.initial}
            animate={fadeBlur.animate}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.8 }}
            className="mt-5 text-base md:text-xl text-white max-w-3xl font-body font-light leading-snug"
          >
            สำหรับข้าราชการครูและบุคลากรทางการศึกษา ตำแหน่งครู (ไม่มีวิทยฐานะ)
            <br className="hidden md:block" />
            โรงเรียนชุมชนบ้านปากชม สำนักงานเขตพื้นที่การศึกษาประถมศึกษาเลย เขต 1
          </motion.p>

          <motion.div
            initial={fadeBlur.initial}
            animate={fadeBlur.animate}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 1.1 }}
            className="mt-6 flex items-center gap-6"
          >
            <a
              href="#documents"
              className="liquid-glass-strong flex items-center gap-2 rounded-full px-6 py-3 text-base font-medium text-white"
            >
              ดูเอกสารทั้งหมด
              <ArrowUpRight className="h-5 w-5 rotate-[135deg]" />
            </a>
          </motion.div>

          <motion.div
            initial={fadeBlur.initial}
            animate={fadeBlur.animate}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 1.3 }}
            className="mt-8 flex flex-col md:flex-row items-stretch gap-4 max-w-4xl w-full"
          >
            <div className="liquid-glass rounded-[1.25rem] p-6 text-left flex-1">
              <div className="flex items-center gap-2 mb-4">
                <UserIcon className="h-6 w-6 text-white/80" />
                <span className="font-heading italic text-2xl md:text-3xl tracking-[-0.5px]">ข้อมูลผู้รับการประเมิน</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 text-base font-body">
                <div>
                  <div className="text-white/60 text-sm">ชื่อ-สกุล</div>
                  <div className="text-white/95 mt-0.5 text-base md:text-lg">ว่าที่ร้อยตรี ศิริสวัสดิ์ พันน้อย</div>
                </div>
                <div>
                  <div className="text-white/60 text-sm">ตำแหน่ง</div>
                  <div className="text-white/95 mt-0.5 text-base md:text-lg">ครู คศ.1</div>
                </div>
                <div>
                  <div className="text-white/60 text-sm">กลุ่มสาระการเรียนรู้</div>
                  <div className="text-white/95 mt-0.5 text-base md:text-lg">พลศึกษา โรงเรียนชุมชนบ้านปากชม</div>
                </div>
                <div>
                  <div className="text-white/60 text-sm">อำเภอ / จังหวัด</div>
                  <div className="text-white/95 mt-0.5 text-base md:text-lg">ปากชม / เลย</div>
                </div>
                <div>
                  <div className="text-white/60 text-sm">สังกัด</div>
                  <div className="text-white/95 mt-0.5 text-base md:text-lg">สำนักงานเขตพื้นที่การศึกษาประถมศึกษาเลย เขต 1</div>
                </div>
                <div>
                  <div className="text-white/60 text-sm">สอนรายวิชา</div>
                  <div className="text-white/95 mt-0.5 text-base md:text-lg">สุขศึกษาและพลศึกษา</div>
                </div>
              </div>
            </div>
            <div className="liquid-glass rounded-[1.25rem] overflow-hidden shrink-0 w-full md:w-48">
              <img
                src={withBase("/hero-portrait.jpg")}
                alt="ว่าที่ร้อยตรี ศิริสวัสดิ์ พันน้อย"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

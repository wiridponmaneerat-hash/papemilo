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
        <div className="flex-1 flex flex-col items-center justify-center px-4 py-10 text-center">
          <motion.div
            initial={fadeBlur.initial}
            animate={fadeBlur.animate}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.4 }}
            className="liquid-glass rounded-full flex items-center gap-2 px-1.5 py-1.5 pr-4"
          >
            <span className="bg-white text-black text-xs font-medium px-3 py-1 rounded-full">
              ปีงบประมาณ 2569
            </span>
            <span className="text-sm text-white/90 font-body">
              แบบข้อตกลงในการพัฒนางาน (PA) สำหรับตำแหน่งครู
            </span>
          </motion.div>

          <div className="mt-6 max-w-4xl">
            <BlurText
              text="แบบข้อตกลงในการพัฒนางาน (PA)"
              className="text-4xl sm:text-5xl md:text-7xl lg:text-[5.5rem] font-heading italic text-white leading-[0.9] md:leading-[0.8] tracking-[-2px] md:tracking-[-4px]"
            />
          </div>

          <motion.p
            initial={fadeBlur.initial}
            animate={fadeBlur.animate}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.8 }}
            className="mt-4 text-sm md:text-base text-white max-w-2xl font-body font-light leading-tight"
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
              className="liquid-glass-strong flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium text-white"
            >
              ดูเอกสารทั้งหมด
              <ArrowUpRight className="h-4 w-4 rotate-[135deg]" />
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
                <UserIcon className="h-5 w-5 text-white/80" />
                <span className="font-heading italic text-xl tracking-[-0.5px]">ข้อมูลผู้รับการประเมิน</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 text-sm font-body">
                <div>
                  <div className="text-white/50 text-xs">ชื่อ-สกุล</div>
                  <div className="text-white/90 mt-0.5">ว่าที่ร้อยตรี ศิริสวัสดิ์ พันน้อย</div>
                </div>
                <div>
                  <div className="text-white/50 text-xs">ตำแหน่ง</div>
                  <div className="text-white/90 mt-0.5">ครู คศ.1</div>
                </div>
                <div>
                  <div className="text-white/50 text-xs">กลุ่มสาระการเรียนรู้</div>
                  <div className="text-white/90 mt-0.5">พลศึกษา โรงเรียนชุมชนบ้านปากชม</div>
                </div>
                <div>
                  <div className="text-white/50 text-xs">อำเภอ / จังหวัด</div>
                  <div className="text-white/90 mt-0.5">ปากชม / เลย</div>
                </div>
                <div>
                  <div className="text-white/50 text-xs">สังกัด</div>
                  <div className="text-white/90 mt-0.5">สำนักงานเขตพื้นที่การศึกษาประถมศึกษาเลย เขต 1</div>
                </div>
                <div>
                  <div className="text-white/50 text-xs">สอนรายวิชา</div>
                  <div className="text-white/90 mt-0.5">สุขศึกษาและพลศึกษา</div>
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

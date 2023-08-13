import Image from 'next/image';

export default function Mypage() {
  return (
    <div>
      <div className="flex flex-col py-7 h-full">
        <div className="flex justify-between items-end">
          <span className="text-3xl font-semibold">bucket</span>
          <span className="-mr-3 -mb-2">
            <Image src="/alam.png" width={48} height={48} alt={'main'} />
          </span>
        </div>
        <div className="mt-8">
          <div className="flex justify-between text-xs font-semibold items-center">
            <em className="bg-gray-400 w-10/12 rounded-md h-3">
              <em className="bg-cyan-400 w-5/12 relative"></em>
            </em>
            <span className="text-lg">80%</span>
          </div>
          <div className="shadow-xl rounded-2xl overflow-hidden mt-8 h-full">
            <div className="flex flex-col h-auto">
              <Image
                src="/images/image_5.png"
                width={400}
                height={500}
                alt={'main'}
              />
              <div className="m-3 h-20">
                <div className="flex rounded-3xl p-auto  pr-1 bg-slate-100 justify-center w-24 h-10 items-center">
                  <Image src="/fire.svg" width={16} height={16} alt={'main'} />
                  &nbsp;자기개발
                </div>
                <div className="text-lg font-semibold mt-2">
                  버킷 리스트 텍스트 영역 버킷리스트 텍스트 영역 버킷 리스트
                  텍스트 영역 버킷리스트 텍스트 영역
                </div>
                <div className="flex justify-between pt-1">
                  <div></div>
                  <div className="flex gap-1">
                    <Image
                      src="/check.svg"
                      width={16}
                      height={16}
                      alt={'main'}
                    />
                    <div className="text-violet-800 font-semibold">
                      달성 완료
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-300 rounded-3xl w-10 mx-auto mt-3 text-center ">
            1/2
          </div>
        </div>
      </div>
    </div>
  );
}

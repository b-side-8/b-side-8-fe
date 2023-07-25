import Image from 'next/image';

export default function Mypage() {
  return (
    <div className='flex flex-col py-7'>
      <div className='flex justify-between items-end'>
        <span className='text-2xl font-semibold'>bucket</span>
        <span className='-mr-3'>
          <Image
              src='/alam.png'
              width={48}
              height={48}
              alt={'myProfile'}
            />
          </span>
      </div>
      <div className='pt-5'>
        <div className='flex justify-between text-xs font-semibold items-center'>
          <em className='bg-gray-400 w-11/12 rounded-md h-2'>
            <em className='bg-cyan-400 w-5/12 relative'></em>
          </em>
          <span className='-mr-2'>0%</span>
        </div>
        <div>
          <div>사진</div>
          <div>사진</div>
          <div>사진</div>
        </div>
        <div>1/2</div>
      </div>
      <div>
        <div>home</div>
        <div>+</div>
        <div>smile</div>
      </div>
    </div>
  );
}

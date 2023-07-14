'usecli';
import TextField from '@/components/TextField';
import Typograph from '@/components/Typograph';
import { useForm, SubmitHandler } from 'react-hook-form';

function NcikName() {
  return (
    <div>
      <Typograph variant='title1'>닉네임을 만들어 볼까요?</Typograph>
      <TextField placeholder='닉네임' />
    </div>
  );
}

export default NcikName;

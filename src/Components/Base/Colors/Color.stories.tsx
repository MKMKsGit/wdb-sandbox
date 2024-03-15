import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta = {
  title: 'Components/Base/Colors Theme',
};

export default meta;
type Story = StoryObj;

const ColorBox = ({text, className}: {text: string, className?: string}) => {
  return <div className={`w-[90px] h-[90px] flex items-center justify-center ${className}`}>{text}</div>
}
/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  render: () => (
    <div className={'flex flex-col gap-3'}>
      <h1 className='text-3xl'>Primary</h1>
      <div className={'flex'}>
        <ColorBox className={'bg-primary-50'} text={'50'}/>
        <ColorBox className={'bg-primary-100'} text={'100'}/>
        <ColorBox className={'bg-primary-300'} text={'300'}/>
        <ColorBox className={'bg-primary-500'} text={'500'}/>
        <ColorBox className={'bg-primary-700'} text={'700'}/>
        <ColorBox className={'bg-primary-900'} text={'900'}/>
      </div>
      <h1 className='text-3xl'>Secondary</h1>
      <div className={'flex'}>
        <ColorBox className={'bg-secondary-50'} text={'50'}/>
        <ColorBox className={'bg-secondary-100'} text={'100'}/>
        <ColorBox className={'bg-secondary-300'} text={'300'}/>
        <ColorBox className={'bg-secondary-500 text-white'} text={'500'}/>
        <ColorBox className={'bg-secondary-700 text-white'} text={'700'}/>
        <ColorBox className={'bg-secondary-900 text-white'} text={'900'}/>
      </div>
      <h1 className='text-3xl'>Status Color</h1>
      <div className={'flex gap-3'}>
        <div className={'flex flex-col gap-1'}>
          <h2 className='text-lg'>Danger</h2>
          <ColorBox className={'bg-danger'} text={''}/>
        </div>
        <div className={'flex flex-col gap-1'}>
          <h2 className='text-lg'>Warning</h2>
          <ColorBox className={'bg-warning'} text={''}/>
        </div>
        <div className={'flex flex-col gap-1'}>
          <h2 className='text-lg'>Success</h2>
          <ColorBox className={'bg-success'} text={''}/>
        </div>
        <div className={'flex flex-col gap-1'}>
          <h2 className='text-lg'>Info</h2>
          <ColorBox className={'bg-info'} text={''}/>
        </div>
      </div>
    </div>
  ),
};

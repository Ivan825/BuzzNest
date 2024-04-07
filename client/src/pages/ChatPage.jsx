import React from 'react'
import Sidebar from '../components/sidebar/Sidebar'
import MessageContainer from '../components/messages/MessageContainer';
function ChatPage() {
  return (
		<div className='p-4 h-screen flex items-center justify-center '>
      <div className='flex sm:h-[450px] md:h-[550px]  rounded-lg overflow-hidden bg-bgColor bg-clip-padding backdrop-filter  '>
			<Sidebar />
			<MessageContainer />
		</div>
    </div>
	);
}

export default ChatPage ;


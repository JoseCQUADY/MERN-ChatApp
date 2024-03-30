
export const Message = () => {
    return (
        <div className="chat chat-start">
            <div className="chat-image avatar">
                <div className="w-10 rounded-full">
                    <img alt="Tailwind CSS chat bubble component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </div>
            </div>
            <div className="chat-header">
                Obi-Wan Kenobi
                <time className="text-xs opacity-50"> 12:45</time>
            </div>
            <div className="chat-bubble">You were the Chosen One!</div>
            {/* <div className="chat chat-end">
                <div className="chat-image avatar">
                    <div className="w-10 rounded-full">
                        <img alt="Tailwind CSS chat bubble component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                    </div>
                </div>
                <div className="chat-header">
                    Anakin
                    <time className="text-xs opacity-50"> 12:46</time>
                </div>
                <div className="chat-bubble">I hate you!</div>
            </div> */}
        </div>
        // <div className="chat chat-sender">
        //     <div className="chat-image avatar">
        //         <div className="w-10 rounded-full">
        //             <img alt="Tailwind CSS chat bubble component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        //         </div>
        //     </div>
        //     <div className={'chat-bubble text-white bg-blue-500'}>
        //         Hi there! How can I help you today?
        //     </div>
        //     <div className="chat-footer opacity-50 text-xs flex gap-1 items-center">12:42</div>
        // </div>
    )
}
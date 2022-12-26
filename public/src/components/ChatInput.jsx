import React from 'react';
import styled from 'styled-components';
import Picker from 'emoji-picker-react';
import {IoMdSend} from 'react-icons/io';
import {BsEmojiSmileFill} from 'react-icons/bs';
import { useState } from 'react';

function ChatInput() {
    const [showEmojiPicker, setShowEmojiPicker] = useState(false);
    const [msg, setMsg] = useState("");

    const handelEmojiPickerHideShow = () => {
        setShowEmojiPicker(!showEmojiPicker);
    }

  return (
    <Container>
        <div className="button-container">
            <div className="emoji">
                <BsEmojiSmileFill onClick={handelEmojiPickerHideShow}/>
                {
                    showEmojiPicker && <Picker onEmojiClick={(emojiObject)=> setMsg((prevMsg)=> prevMsg + emojiObject.emoji)}/>
                }
            </div>
        </div>
        <form className='input-container'>
            <input type="text" placeholder='type your message here' value={msg} onChange={(e) => {setMsg(e.target.value)}} />
            <button className='submit'>
                <IoMdSend />
            </button>
        </form>
    </Container>
  );
}

const Container = styled.div`
    display: grid;
    grid-template-columns: 5% 95%;
    align-items: center;
    background-color: #080420;
    padding: 0 2rem;
    padding-bottom: 0.3rem;
    .button-container {
        display: flex;
        align-items: center;
        color: white;
        gap: 2rem;
        .emoji {
            position: relative;
            svg {
                font-size: 1.5rem;
                color: #ffff00c8;
            }
            .EmojiPickerReact {
                position: absolute;
                top: -470px;
                background-color: #080420;
                box-shadow: 0 5px 10px #9a86f3;
                border-color: #9a86f3;
                .epr-category-nav {
                    button {
                        filter: contrast(0);
                    }
                }
                .epr-search {
                    background-color: transparent;
                }
                .epr-emoji-category-label {
                    background-color: #080420;
                }
                .epr-body::-webkit-scrollbar {
                    background-color: #080420;
                    width: 5px;
                    &-thumb {
                        background-color: #9a86f3;
                    }
                }
            }
        }
    }
    .input-container{
        width: 100%;
        border-radius: 2rem;
        display: flex;
        align-items: center;
        gap: 2rem;
        background-color: #ffffff34;
        input {
            width: 90%;
            height: 60%;
            background-color: transparent;
            color: white;
            border: none;
            padding-left: 1rem;
            font-size: 1.2rem;
            &::selection{
                background-color: #9a86f3;
            }
            &:focus {
                outline: none;
            }
        }
        button {
            padding: 0.3rem 2rem;
            border-radius: 2rem;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: #9a86f3;
            border: none;
            svg {
                font-size: 2rem;
                color: white;
            }
        }
    }
`;

export default ChatInput;
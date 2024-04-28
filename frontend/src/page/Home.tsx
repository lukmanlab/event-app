import { useEffect, useState } from "react";
import Header from "../components/Header";
import Container from "./Container";

type HomeState = {
  title?: string;
  detailEvent?: string;
  date?: string;
}

export default function Home() {
  const [state, setState] = useState<HomeState>();
  
  useEffect(() => {
    console.log(state);
  },[state]);

  const _onChangeTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({...state, title: event.target.value});
  };

  const _onChangeDetailEvent = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setState({...state, detailEvent: event.target.value});
  };

  const _onChange =(event: React.ChangeEvent<HTMLInputElement>) => {
    setState({...state, date: event.target.value});
  }

  return (
    <Container>
      <div>
        <Header title="APP Event" tag="by v-room" />
        <form className="mt-6">
          <label className="my-4">Judul Event</label>
          <input
            className="w-full p-2 outline outline-1 mb-4 bg-slate-300"
            type="text"
            onChange={_onChangeTitle}
          />
          <label className="my-4">Detail Event</label>
          <textarea
            className="w-full p-2 outline outline-1 mb-4 rounded-xl"
            onChange={_onChangeDetailEvent}
          />
          <label className="my-4">Tanggal Event</label>
          <input
            className="w-full p-2 outline outline-1 mb-4 rounded-xl"
            type="datetime-local"
            onChange={_onChange}
          />
          <button className="flex p-2 font-bold mt-7 text-white bg-green-800 mx-auto w-60 justify-center rounded-xl">Gass</button>
        </form>
      </div>
    </Container>
  );
}
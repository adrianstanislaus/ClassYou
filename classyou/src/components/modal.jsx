import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from "react";

export default function Modal(props) {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate()
  return (
    <>
      <button
        className="border-2 border-black border-b-4 rounded-3xl focus-within:ring-4 ring-yellow-300 bg-red-500 px-2 text-white hover:bg-red-400 transform hover:translate-y-0.5"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Delete
      </button>
      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-xl">
              {/*content*/}
              <div className="border-0 shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className=" font-roboto flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="font-spacemono text-3xl font-semibold">
                    Delete Class?
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
                    Are you sure you want to delete this class ? after deleted you can't restore it.
                  </p>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => {
                      setShowModal(false)
                      props.deleteClass(props.id)
                      navigate(`/admin/dashboard`)
                    }
                      
                    }
                  >
                    Yes, delete this class.
                  </button>
                  <button
                    className="bg-green-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    No
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}

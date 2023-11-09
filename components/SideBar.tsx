import NewChat from "./NewChat";

type Props = {};
function SideBar({}: Props) {
  return (
    <div className="p-2 flex flex-col h-screen">
      <div className=" flex-1">
        <div>
          <NewChat></NewChat>
          <div>{/* Models */}</div>
          {/* Map of Chats */}
        </div>
      </div>
    </div>
  );
}
export default SideBar;

import {  shortenCode } from "@/core/utils/helper";
import { sp } from "@/core/utils/numbersChange";

function Transaction({ data }) {
  if (!data?.length) {
    return (
      <div className="h-screen text-center py-5 text-gray-500">
        هیچ تراکنشی برای نمایش وجود ندارد.
      </div>
    );
  }
  return (
    <div className="border border-[#00000033] rounded-[10px] overflow-hidden text-center mb-20">
      <table className="border-collapse w-full">
        <thead className="bg-[#DBDBDB] md:bg-[#F3F3F3]  text-[12px] md:text-[16px] font-normal">
          <tr>
            <th className="p-3 text-center align-middle">تاریخ و ساعت</th>
            <th className="p-3 text-center align-middle">مبلغ (تومان)</th>
            <th className="hidden md:inline-block p-3 text-center align-middle">
              نوع تراکنش
            </th>
            <th className="p-3 text-center align-middle">شماره سفارش</th>
          </tr>
        </thead>
        <tbody className="font-vazirFd font-light w-full text-[13px]">
          {data.map((transaction) => {
   

            return (
              <tr key={transaction.id}>
                <td className="p-3 text-center align-middle ">
                {`${new Date(transaction.createdAt).toLocaleDateString("fa-IR")} - ${new Date(transaction.createdAt).toLocaleTimeString("fa-IR")}`}
                </td>
                <td className="p-3 text-center align-middle">
                  {sp(transaction.amount)}
                </td>
                <td className="p-3 text-center align-middle hidden md:table-cell">
                  خرید
                </td>
                <td className="p-3 text-center align-middle">
                  سفارش {shortenCode(transaction.id)}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Transaction;

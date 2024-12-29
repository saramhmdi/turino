
import { calculateDayNight } from "@/core/utils/helper";

function Transaction({ data }) {
  if (!data?.length) {
    return (
      <div className="h-screen text-center py-5 text-gray-500">
        هیچ تراکنشی برای نمایش وجود ندارد.
      </div>
    );
  }
  return (
    <div className="overflow-x-auto">
      <table className="border-collapse border rounded-[10px] w-full border-[#00000033]">
        <thead className="bg:[#DBDBDB] md:bg-[#F3F3F3] text-[12px] md:text-[16px] font-normal md:text-text md:text-[#000000]">
          <tr className="text-right text-sm">
            <th className="p-3 border-b border-[#00000033]">تاریخ و ساعت</th>
            <th className="p-3 border-b border-[#00000033]">مبلغ (تومان)</th>
            <th className="p-3 border-b border-[#00000033]">نوع تراکنش</th>
            <th className="p-3 border-b border-[#00000033]">شماره سفارش</th>
          </tr>
        </thead>
        <tbody className="font-vazirFd font-light text-[13px] pt-3">
          {data.map((transaction, index) => {
            const { days, nights } = calculateDayNight(
              transaction.createdAt,
              transaction.createdAt
            );

            return (
              <tr key={transaction.id}>
                <td className="p-3">
                  <div>
                    {new Date(transaction.createdAt).toLocaleString("fa-IR")}
                  </div>
                </td>
                <td className="p-3">
                  {transaction.amount.toLocaleString("fa-IR")}
                </td>
                <td className="p-3 hidden md:inline">خرید</td>
                <td className="p-3">
                  سفارش {`${transaction.id.slice(0, 4)}...`}
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

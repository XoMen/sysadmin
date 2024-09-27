import Lucide from "@/components/Base/Lucide";
import { Tab } from "@/components/Base/Headless";
import { formatCurrency } from "@/utils/helper";
import transactions from "@/fakers/transactions";
import users from "@/fakers/users";
import Button from "@/components/Base/Button";
import Table from "@/components/Base/Table";
import _ from "lodash";

function Main() {
  return (
    <div className="grid grid-cols-12 gap-y-10 gap-x-6">
      <div className="col-span-12">
        <div className="flex flex-col md:h-10 gap-y-3 md:items-center md:flex-row">
          <div className="text-base font-medium group-[.mode--light]:text-white">
            فاکتور
          </div>
          <div className="flex flex-col sm:flex-row gap-x-3 gap-y-2 md:ms-auto">
            <Button
              variant="primary"
              className="group-[.mode--light]:!bg-white/[0.12] group-[.mode--light]:!text-slate-200 group-[.mode--light]:!border-transparent"
            >
              <Lucide
                icon="ExternalLink"
                className="stroke-[1.3] w-4 h-4 me-3"
              />{" "}
              پروفایل من
            </Button>
          </div>
        </div>
        <div className="mt-3.5 grid grid-cols-12 gap-y-10 gap-x-6">
          <div className="col-span-12 xl:col-span-8">
            <div className="flex flex-col p-5 sm:p-14 box box--stacked">
              <div className="flex flex-col gap-y-7 md:flex-row px-8 sm:px-10 py-12 sm:py-16 sm:-mx-10 sm:-mt-10 border bg-primary/[0.03] border-primary/5 rounded-lg">
                <div className="flex flex-col justify-center">
                  <div className="rounded-[0.6rem] w-[50px] h-[50px] border border-primary/50 flex items-center justify-center">
                    <div className="flex items-center justify-center w-[45px] rounded-lg h-[45px] bg-gradient-to-r from-theme-1/90 to-theme-2/90 transition-transform ease-in-out group-[.side-menu--collapsed.side-menu--on-hover]:-rotate-180">
                      <div className="w-[23px] h-[23px] relative -rotate-45 [&_div]:bg-white">
                        <div className="absolute w-[21%] start-0 inset-y-0 my-auto rounded-full opacity-50 h-[75%]"></div>
                        <div className="absolute w-[21%] inset-0 m-auto h-[120%] rounded-full"></div>
                        <div className="absolute w-[21%] end-0 inset-y-0 my-auto rounded-full opacity-50 h-[75%]"></div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-3.5 text-lg font-medium text-slate-600/90">
                    شرکت تیلوایس Pty Ltd.
                  </div>
                </div>
                <div className="md:text-end md:ms-auto">
                  <div className="-mt-1 text-lg font-medium text-primary">
                    # صورتحساب
                  </div>
                  <div className="mt-1">
                    {transactions.fakeTransactions()[0].orderId}
                  </div>
                  <div className="flex flex-col gap-1 mt-7">
                    <div>{users.fakeUsers()[0].addressLine1}</div>
                    <div>{users.fakeUsers()[0].addressLine2}</div>
                    <div>{users.fakeUsers()[0].location}</div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col px-8 pt-4 mt-6 sm:px-0 sm:flex-row">
                <div>
                  <div className=" text-slate-500">صورتحساب برای :</div>
                  <div className="mt-1.5 text-base font-medium text-primary">
                    {transactions.fakeTransactions()[1].user.name}
                  </div>
                  <div className="flex flex-col gap-1 mt-1.5">
                    <div>{users.fakeUsers()[1].addressLine1}</div>
                    <div>{users.fakeUsers()[1].addressLine2}</div>
                    <div>{users.fakeUsers()[1].location}</div>
                  </div>
                </div>
                <div className="flex flex-col gap-4 sm:ms-auto sm:text-end mt-7 sm:mt-0">
                  <div>
                    <div className="text-slate-500">تاریخ صورتحساب :</div>
                    <div className="mt-1.5 font-medium text-slate-600">
                      {transactions.fakeTransactions()[0].orderDate}
                    </div>
                  </div>
                  <div>
                    <div className="text-slate-500">تاریخ سررسید :</div>
                    <div className="mt-1.5 font-medium text-slate-600">
                      {transactions.fakeTransactions()[0].orderDate}
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-10 border border-slate-200/80 rounded-[0.6rem]">
                <div className="overflow-auto xl:overflow-visible">
                  <Table>
                    <Table.Thead>
                      <Table.Tr>
                        <Table.Td className="py-4 font-medium bg-slate-50 first:rounded-ss-[0.6rem] last:rounded-se-[0.6rem] border-slate-200/80 text-slate-500">
                          مورد
                        </Table.Td>
                        <Table.Td className="text-end py-4 font-medium bg-slate-50 first:rounded-ss-[0.6rem] last:rounded-se-[0.6rem] border-slate-200/80 text-slate-500">
                          تعداد
                        </Table.Td>
                        <Table.Td className="text-end py-4 font-medium bg-slate-50 first:rounded-ss-[0.6rem] last:rounded-se-[0.6rem] border-slate-200/80 text-slate-500">
                          نرخ
                        </Table.Td>
                        <Table.Td className="text-end py-4 font-medium bg-slate-50 first:rounded-ss-[0.6rem] last:rounded-se-[0.6rem] border-slate-200/80 text-slate-500">
                          مقدار
                        </Table.Td>
                      </Table.Tr>
                    </Table.Thead>
                    <Table.Tbody>
                      {_.take(
                        transactions.fakeTransactions()[0].products,
                        5
                      ).map((faker, fakerKey) => (
                        <Table.Tr
                          key={fakerKey}
                          className="[&_td]:last:border-b-0"
                        >
                          <Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
                            <div className="flex items-center">
                              <div className="w-6 h-6 me-2.5 overflow-hidden border-2 rounded-full image-fit zoom-in border-slate-200/70 box">
                                <img
                                  alt="تیل وایز - قالب داشبورد مدیریتی"
                                  src={faker.images[0].path}
                                />
                              </div>
                              <div className="whitespace-nowrap">
                                {faker.name}
                              </div>
                            </div>
                          </Table.Td>
                          <Table.Td className="py-4 text-end border-dashed dark:bg-darkmode-600">
                            <div className="whitespace-nowrap">
                              {_.random(1, 5)}
                            </div>
                          </Table.Td>
                          <Table.Td className="py-4 text-end border-dashed dark:bg-darkmode-600">
                            <div className="whitespace-nowrap">
                              ${formatCurrency(Math.floor(faker.price))}
                            </div>
                          </Table.Td>
                          <Table.Td className="py-4 text-end border-dashed dark:bg-darkmode-600">
                            <div className="font-medium whitespace-nowrap">
                              $
                              {formatCurrency(
                                Math.floor(faker.price * _.random(2, 3))
                              )}
                            </div>
                          </Table.Td>
                        </Table.Tr>
                      ))}
                    </Table.Tbody>
                  </Table>
                </div>
              </div>
              <div className="flex flex-col gap-3.5 pe-5 my-10 ms-auto text-end">
                <div className="flex items-center justify-end">
                  <div className="text-slate-500">جمع جزئی:</div>
                  <div className="w-20 font-medium sm:w-52 text-slate-600">
                    ${formatCurrency(Math.floor(_.random(1300, 1600)))}
                  </div>
                </div>
                <div className="flex items-center justify-end">
                  <div className="text-slate-500">جمع:</div>
                  <div className="w-20 font-medium sm:w-52 text-slate-600">
                    ${formatCurrency(Math.floor(_.random(1300, 1600)))}
                  </div>
                </div>
                <div className="flex items-center justify-end">
                  <div className="text-slate-500">مالیات:</div>
                  <div className="w-20 font-medium sm:w-52 text-slate-600">
                    ${formatCurrency(Math.floor(_.random(20, 50)))}
                  </div>
                </div>
                <div className="flex items-center justify-end">
                  <div className="text-slate-500">مبلغ پرداخت شده:</div>
                  <div className="w-20 font-medium sm:w-52 text-slate-600">
                    ${formatCurrency(Math.floor(_.random(1300, 1600)))}
                  </div>
                </div>
                <div className="flex items-center justify-end">
                  <div className="text-slate-500">مانده بدهی:</div>
                  <div className="w-20 font-medium sm:w-52 text-slate-600">
                    ${formatCurrency(Math.floor(_.random(10, 30)))}
                  </div>
                </div>
              </div>
              <div className="px-10 pt-6 -mx-8 border-t border-dashed border-slate-200/80">
                <div className="text-base font-medium">
                  سوالی درباره صورتحساب خود دارید؟
                </div>
                <div className="mt-1 text-slate-500">
                  با ما تماس بگیرید برای کمک در هر مسأله‌ای مربوط به صورتحساب.
                </div>
                <div className="mt-5 text-slate-500">© 2046 eltheme.</div>
              </div>
            </div>
          </div>
          <div className="col-span-12 xl:col-span-4">
            <div className="flex flex-col p-5 box box--stacked">
              <div className="pb-5 mb-5 font-medium border-b border-dashed border-slate-300/70 text-[0.94rem]">
                تاریخچه
              </div>
              <div>
                <div className="flex">
                  <div>
                    <span className="text-lg font-medium">
                      {formatCurrency(_.random(2000, 4000))}
                    </span>{" "}
                    <span>صورتحساب‌ها</span>
                  </div>
                </div>
                <div className="flex h-2 mt-3.5">
                  <div className="h-full first:rounded-l last:rounded-r border border-primary/50 bg-primary/50 w-[35%]"></div>
                  <div className="h-full first:rounded-l last:rounded-r border border-info/50 bg-info/50 w-[20%]"></div>
                  <div className="h-full first:rounded-l last:rounded-r border border-success/50 bg-success/50 w-[45%]"></div>
                </div>
                <Tab.Group className="mt-8">
                  <Tab.List
                    variant="boxed-tabs"
                    className="bg-white shadow-sm rounded-[0.6rem] border-slate-200"
                  >
                    <Tab className="bg-slate-50 first:rounded-s-[0.6rem] last:rounded-e-[0.6rem] [&[aria-selected='true']_button]:text-current">
                      <Tab.Button
                        className="w-full text-slate-500 flex items-center justify-center whitespace-nowrap rounded-[0.6rem]"
                        as="button"
                      >
                        <div className="w-2 h-2 me-2 border rounded-full border-primary/60 bg-primary/60"></div>{" "}
                        در انتظار ({_.random(100, 300)})
                      </Tab.Button>
                    </Tab>
                    <Tab className="bg-slate-50 first:rounded-s-[0.6rem] last:rounded-e-[0.6rem] [&[aria-selected='true']_button]:text-current">
                      <Tab.Button
                        className="w-full text-slate-500 flex items-center justify-center whitespace-nowrap rounded-[0.6rem]"
                        as="button"
                      >
                        <div className="w-2 h-2 me-2 border rounded-full border-danger/60 bg-danger/60"></div>{" "}
                        Canceled ({_.random(100, 300)})
                      </Tab.Button>
                    </Tab>
                  </Tab.List>
                  <Tab.Panels className="mt-3">
                    <Tab.Panel>
                      <div className="border border-dashed rounded-[0.6rem] border-slate-300/80">
                        {_.take(transactions.fakeTransactions(), 5).map(
                          (faker, fakerKey) => (
                            <div
                              key={fakerKey}
                              className="flex items-center px-5 py-4 border-b border-dashed cursor-pointer border-slate-300/80 last:border-b-0 last:border-0 hover:bg-slate-50"
                            >
                              <div>
                                <div className="max-w-[12rem] font-medium truncate text-primary">
                                  {faker.user.name}
                                </div>
                                <div className="whitespace-nowrap text-slate-500 mt-0.5">
                                  {faker.category.name}
                                </div>
                                <div className="mt-1.5 text-xs text-slate-500">
                                  {faker.orderDate}
                                </div>
                              </div>
                              <div className="ms-auto font-medium whitespace-nowrap">
                                ${faker.amount} دلار آمریکا
                              </div>
                            </div>
                          )
                        )}
                      </div>
                      <Button
                        variant="primary"
                        className="w-full mt-3 bg-white text-primary border-primary/[0.15] hover:bg-primary/20"
                      >
                        مشاهده تمام صورتحساب‌ها
                        <Lucide
                          icon="ArrowRight"
                          className="stroke-[1.3] w-4 h-4 ms-2"
                        />
                      </Button>
                    </Tab.Panel>
                    <Tab.Panel>
                      <div className="border border-dashed rounded-[0.6rem] border-slate-300/80">
                        {_.take(transactions.fakeTransactions(), 5).map(
                          (faker, fakerKey) => (
                            <div
                              key={fakerKey}
                              className="flex items-center px-5 py-4 border-b border-dashed cursor-pointer border-slate-300/80 last:border-b-0 last:border-0 hover:bg-slate-50"
                            >
                              <div>
                                <div className="max-w-[12rem] font-medium truncate text-primary">
                                  {faker.user.name}
                                </div>
                                <div className="whitespace-nowrap text-slate-500 mt-0.5">
                                  {faker.category.name}
                                </div>
                                <div className="mt-1.5 text-xs text-slate-500">
                                  {faker.orderDate}
                                </div>
                              </div>
                              <div className="ms-auto font-medium whitespace-nowrap">
                                ${faker.amount} دلار آمریکا
                              </div>
                            </div>
                          )
                        )}
                      </div>
                      <Button
                        variant="primary"
                        className="w-full mt-3 bg-white text-primary border-primary/[0.15] hover:bg-primary/20"
                      >
                        مشاهده تمام صورتحساب‌ها
                        <Lucide
                          icon="ArrowRight"
                          className="stroke-[1.3] w-4 h-4 ms-2"
                        />
                      </Button>
                    </Tab.Panel>
                  </Tab.Panels>
                </Tab.Group>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;

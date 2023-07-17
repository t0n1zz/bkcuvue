<?php

namespace App\Exports;

use App\PresensiCuti;
use Carbon\Carbon;
use Illuminate\Support\Facades\DB;
use Maatwebsite\Excel\Concerns\FromArray;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Maatwebsite\Excel\Concerns\WithCustomStartCell;
use Maatwebsite\Excel\Events\AfterSheet;
use Maatwebsite\Excel\Concerns\WithEvents;
use Maatwebsite\Excel\Concerns\WithTitle;
use \Maatwebsite\Excel\Sheet;

class Cuti2 implements FromArray, WithHeadings, WithCustomStartCell, WithEvents, WithTitle
{

    protected $periode;

    function __construct($periode)
    {
        $this->periode = $periode;
    }

    public function startCell(): string
    {
        return 'A7';
    }

    public function registerEvents(): array
    {

        return [
            AfterSheet::class => function (AfterSheet $event) {
                /** @var Sheet $sheet */
                $sheet = $event->sheet;

                $sheet->mergeCells('A5:A6');
                $sheet->setCellValue('A5', "NO.");

                $sheet->mergeCells('B5:B6');
                $sheet->setCellValue('B5', "NAMA");

                $sheet->setCellValue('C6', "1");
                $sheet->setCellValue('D6', "2");
                $sheet->setCellValue('E6', "3");
                $sheet->setCellValue('F6', "4");
                $sheet->setCellValue('G6', "5");
                $sheet->setCellValue('H6', "6");
                $sheet->setCellValue('I6', "7");
                $sheet->setCellValue('J6', "8");
                $sheet->setCellValue('K6', "9");
                $sheet->setCellValue('L6', "10");
                $sheet->setCellValue('M6', "11");
                $sheet->setCellValue('N6', "12");

                $sheet->mergeCells('C5:N5');
                $sheet->setCellValue('C5', "WAKTU CUTI DALAM BULAN ");

                $sheet->mergeCells('O5:O6');
                $sheet->setCellValue('O5', "JLH");



                $styleArray = [
                    'alignment' => [
                        'horizontal' => \PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_CENTER,
                        'vertical' => \PhpOffice\PhpSpreadsheet\Style\Alignment::VERTICAL_CENTER,
                    ],

                ];

                $cellRange = 'A5:O39'; // All headers
                $event->sheet->getDelegate()->getStyle('A5:O6')->applyFromArray($styleArray);
                $event->sheet->getDelegate()->getColumnDimension('B')->setAutoSize(true);
                $event->sheet->getDelegate()->getStyle('A5:O6')->applyFromArray(['fill' => [
                    'fillType' => \PhpOffice\PhpSpreadsheet\Style\Fill::FILL_SOLID,
                    'color' => ['argb' => 'ffff00']
                ]]);
                $event->sheet->getStyle('A5:O6')->applyFromArray([
                    'borders' => [
                        'allBorders' => [
                            'borderStyle' => \PhpOffice\PhpSpreadsheet\Style\Border::BORDER_THIN,
                            'color' => ['argb' => '000000'],
                        ],
                    ],
                ]);
            },
        ];
    }

    public function headings(): array
    {
        return [];
    }

    public function array(): array
    {
        $date = \Carbon\Carbon::parse($this->periode . "-" . '01' . "-01");
        $model = DB::select('select users.id,users.id_cu,users.id_aktivis,aktivis.name,aktivis.gambar,aktivis_pekerjaan.id_aktivis,aktivis_pekerjaan.tingkat,aktivis_pekerjaan.selesai, aktivis_pekerjaan.id_tempat,aktivis_pekerjaan.name as jabatan  from users
        inner join aktivis on aktivis.id = users.id_aktivis inner join aktivis_pekerjaan on aktivis_pekerjaan.id_aktivis = aktivis.id
        where users.id_cu = 0 and users.id_aktivis !=0 and users.status = 1 and aktivis_pekerjaan.selesai is null and aktivis_pekerjaan.id_tempat =1 and (aktivis_pekerjaan.tingkat = 5 or aktivis_pekerjaan.tingkat =6 or aktivis_pekerjaan.tingkat =7 or aktivis_pekerjaan.tingkat =8)  order by aktivis.name asc');
        $izinS = PresensiCuti::with('aktivis')->where('realisasi','!=',null)->whereYear('created_at', '=', Carbon::parse($date)->format('Y'))->select('id_user', 'id_aktivis', 'tanggal_mulai', 'tanggal_selesai')->get();
        $izinGroupBy = $izinS->groupBy('id_user');
        $arrayComplete = [];
        $no = 0;
        foreach ($model as $aktivis) {
            $name =  $aktivis->name;
            $jan = 0;
            $feb = 0;
            $mar = 0;
            $apr = 0;
            $mei = 0;
            $jun = 0;
            $jul = 0;
            $ags = 0;
            $sep = 0;
            $okt = 0;
            $nov = 0;
            $des = 0;


            if(isset($izinGroupBy[$aktivis->id])){
                
                foreach ($izinGroupBy[$aktivis->id] as $mas) {
                    $month = Carbon::parse($mas->tanggal_mulai)->format('m');
                    $year = Carbon::parse($mas->tanggal_mulai)->format('Y');
                    $month2 = Carbon::parse($mas->tanggal_selesai)->format('m');

                    if ($month != $month2) {

                            $lastDayOfMonth = Carbon::createFromDate($year, $month)->endOfMonth();
                            $startDate = Carbon::parse($mas->tanggal_mulai);

                            for (
                                $date = $startDate;
                                $date->lte($lastDayOfMonth);
                                $date->addDay()
                            ) {
                                if (!$date->isSunday()) {
                                if (substr($mas->tanggal_mulai, 5, 2) == "01") {
                                    $jan++;
                                } elseif (substr($mas->tanggal_mulai, 5, 2) == "02") {
                                    $feb++;
                                } elseif (substr($mas->tanggal_mulai, 5, 2) == "03") {
                                    $mar++;
                                } elseif (substr($mas->tanggal_mulai, 5, 2) == "04") {
                                    $apr++;
                                } elseif (substr($mas->tanggal_mulai, 5, 2) == "05") {
                                    $mei++;
                                } elseif (substr($mas->tanggal_mulai, 5, 2) == "06") {
                                    $jun++;
                                } elseif (substr($mas->tanggal_mulai, 5, 2) == "07") {
                                    $jul++;
                                } elseif (substr($mas->tanggal_mulai, 5, 2) == "08") {
                                    $ags++;
                                } elseif (substr($mas->tanggal_mulai, 5, 2) == "09") {
                                    $sep++;
                                } elseif (substr($mas->tanggal_mulai, 5, 2) == "10") {
                                    $okt++;
                                } elseif (substr($mas->tanggal_mulai, 5, 2) == "11") {
                                    $nov++;
                                } elseif (substr($mas->tanggal_mulai, 5, 2) == "12") {
                                    $des++;
                                }
                                }
                            }

                            $firstDayOfMonth = Carbon::createFromDate($year, $month2)->startOfMonth();
                            $endDate = Carbon::parse($mas->tanggal_selesai);

                            for ($date = $firstDayOfMonth; $date->lte($endDate); $date->addDay()) {
                                if (!$date->isSunday()) {
                                if (substr($mas->tanggal_selesai, 5, 2) == "01") {
                                    $jan++;
                                } elseif (substr($mas->tanggal_selesai, 5, 2) == "02") {
                                    $feb++;
                                } elseif (substr($mas->tanggal_selesai, 5, 2) == "03") {
                                    $mar++;
                                } elseif (substr($mas->tanggal_selesai, 5, 2) == "04") {
                                    $apr++;
                                } elseif (substr($mas->tanggal_selesai, 5, 2) == "05") {
                                    $mei++;
                                } elseif (substr($mas->tanggal_selesai, 5, 2) == "06") {
                                    $jun++;
                                } elseif (substr($mas->tanggal_selesai, 5, 2) == "07") {
                                    $jul++;
                                } elseif (substr($mas->tanggal_selesai, 5, 2) == "08") {
                                    $ags++;
                                } elseif (substr($mas->tanggal_selesai, 5, 2) == "09") {
                                    $sep++;
                                } elseif (substr($mas->tanggal_selesai, 5, 2) == "10") {
                                    $okt++;
                                } elseif (substr($mas->tanggal_selesai, 5, 2) == "11") {
                                    $nov++;
                                } elseif (substr($mas->tanggal_selesai, 5, 2) == "12") {
                                    $des++;
                                }
                                }
                            }

                        if (substr($mas->tanggal_selesai, 5, 2) == "01") {
                            $jan--;
                        } elseif (substr($mas->tanggal_selesai, 5, 2) == "02") {
                            $feb--;
                        } elseif (substr($mas->tanggal_selesai, 5, 2) == "03") {
                            $mar--;
                        } elseif (substr($mas->tanggal_selesai, 5, 2) == "04") {
                            $apr--;
                        } elseif (substr($mas->tanggal_selesai, 5, 2) == "05") {
                            $mei--;
                        } elseif (substr($mas->tanggal_selesai, 5, 2) == "06") {
                            $jun--;
                        } elseif (substr($mas->tanggal_selesai, 5, 2) == "07") {
                            $jul--;
                        } elseif (substr($mas->tanggal_selesai, 5, 2) == "08") {
                            $ags--;
                        } elseif (substr($mas->tanggal_selesai, 5, 2) == "09") {
                            $sep--;
                        } elseif (substr($mas->tanggal_selesai, 5, 2) == "10") {
                            $okt--;
                        } elseif (substr($mas->tanggal_selesai, 5, 2) == "11") {
                            $nov--;
                        } elseif (substr($mas->tanggal_selesai, 5, 2) == "12") {
                            $des--;
                        }
                    }else{
                        for ($date = Carbon::parse($mas->tanggal_mulai); $date->lte(Carbon::parse($mas->tanggal_selesai)); $date->addDay()) {
                            if (!$date->isSunday()) {
                                if (substr($mas->tanggal_mulai, 5, 2) == "01") {
                                    $jan++;
                                } elseif (substr($mas->tanggal_mulai, 5, 2) == "02") {
                                    $feb++;
                                } elseif (substr($mas->tanggal_mulai, 5, 2) == "03") {
                                    $mar++;
                                } elseif (substr($mas->tanggal_mulai, 5, 2) == "04") {
                                    $apr++;
                                } elseif (substr($mas->tanggal_mulai, 5, 2) == "05") {
                                    $mei++;
                                } elseif (substr($mas->tanggal_mulai, 5, 2) == "06") {
                                    $jun++;
                                } elseif (substr($mas->tanggal_mulai, 5, 2) == "07") {
                                    $jul++;
                                } elseif (substr($mas->tanggal_mulai, 5, 2) == "08") {
                                    $ags++;
                                } elseif (substr($mas->tanggal_mulai, 5, 2) == "09") {
                                    $sep++;
                                } elseif (substr($mas->tanggal_mulai, 5, 2) == "10") {
                                    $okt++;
                                } elseif (substr($mas->tanggal_mulai, 5, 2) == "11") {
                                    $nov++;
                                } elseif (substr($mas->tanggal_mulai, 5, 2) == "12") {
                                    $des++;
                                }
                            }
                        }
                        
                        if (substr($mas->tanggal_mulai, 5, 2) == "01") {
                            $jan--;
                        } elseif (substr($mas->tanggal_mulai, 5, 2) == "02") {
                            $feb--;
                        } elseif (substr($mas->tanggal_mulai, 5, 2) == "03") {
                            $mar--;
                        } elseif (substr($mas->tanggal_mulai, 5, 2) == "04") {
                            $apr--;
                        } elseif (substr($mas->tanggal_mulai, 5, 2) == "05") {
                            $mei--;
                        } elseif (substr($mas->tanggal_mulai, 5, 2) == "06") {
                            $jun--;
                        } elseif (substr($mas->tanggal_mulai, 5, 2) == "07") {
                            $jul--;
                        } elseif (substr($mas->tanggal_mulai, 5, 2) == "08") {
                            $ags--;
                        } elseif (substr($mas->tanggal_mulai, 5, 2) == "09") {
                            $sep--;
                        } elseif (substr($mas->tanggal_mulai, 5, 2) == "10") {
                            $okt--;
                        } elseif (substr($mas->tanggal_mulai, 5, 2) == "11") {
                            $nov--;
                        } elseif (substr($mas->tanggal_mulai, 5, 2) == "12") {
                            $des--;
                        }
                    }
                }
            }
            
            $arrayNew = [];

            $no++;
            $jlh = $jan + $feb + $mar + $apr + $mei + $jun +
                $jul + $ags + $sep + $okt + $nov + $des;

            array_push($arrayNew, $no);
            array_push($arrayNew, $name);
            array_push($arrayNew, $jan);
            array_push($arrayNew, $feb);
            array_push($arrayNew, $mar);
            array_push($arrayNew, $apr);
            array_push($arrayNew, $mei);
            array_push($arrayNew, $jun);
            array_push($arrayNew, $jul);
            array_push($arrayNew, $ags);
            array_push($arrayNew, $sep);
            array_push($arrayNew, $okt);
            array_push($arrayNew, $nov);
            array_push($arrayNew, $des);
            array_push($arrayNew, $jlh);

            array_push($arrayComplete, $arrayNew);
        }

        return $arrayComplete;
    }


    public function title(): string
    {
        return 'CUTI 2';
    }
}

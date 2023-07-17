<?php

namespace App\Exports;

use App\Presensi;
use App\Keterlambatan;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Support\Facades\DB;
use Maatwebsite\Excel\Concerns\FromArray;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Maatwebsite\Excel\Concerns\WithCustomStartCell;
use Maatwebsite\Excel\Events\AfterSheet;
use Maatwebsite\Excel\Concerns\WithEvents;
use Maatwebsite\Excel\Concerns\WithTitle;
use \Maatwebsite\Excel\Sheet;

class RekapKeterlambatan implements FromArray, WithHeadings, WithCustomStartCell, WithEvents, WithTitle
{

    protected $periode;

    function __construct($periode)
    {
        $this->periode = $periode;
    }

    public function startCell(): string
    {
        return 'A3';
    }

    public function registerEvents(): array
    {

        return [
            AfterSheet::class => function (AfterSheet $event) {
                /** @var Sheet $sheet */
                $sheet = $event->sheet;

                $sheet->mergeCells('A1:A3');
                $sheet->setCellValue('A1', "NO.");

                $sheet->mergeCells('B1:B3');
                $sheet->setCellValue('B1', "NAMA");

                $sheet->mergeCells('C1:Z1');
                $sheet->setCellValue('C1', "WAKTU TERLAMBAT DALAM BULAN (MENIT)");

                $sheet->mergeCells('C2:D2');
                $sheet->setCellValue('C2', "Jan");

                $sheet->mergeCells('E2:F2');
                $sheet->setCellValue('E2', "Feb");

                $sheet->mergeCells('G2:H2');
                $sheet->setCellValue('G2', "Mar");

                $sheet->mergeCells('I2:J2');
                $sheet->setCellValue('I2', "Apr");

                $sheet->mergeCells('K2:L2');
                $sheet->setCellValue('K2', "Mei");

                $sheet->mergeCells('M2:N2');
                $sheet->setCellValue('M2', "Jun");

                $sheet->mergeCells('O2:P2');
                $sheet->setCellValue('O2', "Jul");

                $sheet->mergeCells('Q2:R2');
                $sheet->setCellValue('Q2', "Agu");

                $sheet->mergeCells('S2:T2');
                $sheet->setCellValue('S2', "Sep");

                $sheet->mergeCells('U2:V2');
                $sheet->setCellValue('U2', "Okt");

                $sheet->mergeCells('W2:X2');
                $sheet->setCellValue('W2', "Nov");

                $sheet->mergeCells('Y2:Z2');
                $sheet->setCellValue('Y2', "Des");

                $sheet->mergeCells('AA1:AA3');
                $sheet->setCellValue('AA1', "JLH");



                $styleArray = [
                    'alignment' => [
                        'horizontal' => \PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_CENTER,
                        'vertical' => \PhpOffice\PhpSpreadsheet\Style\Alignment::VERTICAL_CENTER,
                    ],

                ];

                $cellRange = 'A1:AA34'; // All headers
                $event->sheet->getDelegate()->getStyle('A1:AA3')->applyFromArray($styleArray);
                $event->sheet->getDelegate()->getColumnDimension('B')->setAutoSize(true);
                $event->sheet->getDelegate()->getStyle('A1:AA3')->applyFromArray(['fill' => [
                    'fillType' => \PhpOffice\PhpSpreadsheet\Style\Fill::FILL_SOLID,
                    'color' => ['argb' => 'ffff00']
                ]]);
                $event->sheet->getStyle($cellRange)->applyFromArray([
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
        return [
            "P",
            "TK",
            "P",
            "TK",
            "P",
            "TK",
            "P",
            "TK",
            "P",
            "TK",
            "P",
            "TK",
            "P",
            "TK",
            "P",
            "TK",
            "P",
            "TK",
            "P",
            "TK",
            "P",
            "TK",
            "P",
            "TK",
            "P",
            "TK",
        ];
    }

    public function array(): array
    {
        $date = \Carbon\Carbon::parse($this->periode . "-" . '01' . "-01");
        $model = DB::select('select users.id,users.id_cu,users.id_aktivis,aktivis.name,aktivis.gambar,aktivis_pekerjaan.id_aktivis,aktivis_pekerjaan.tingkat,aktivis_pekerjaan.selesai, aktivis_pekerjaan.id_tempat,aktivis_pekerjaan.name as jabatan  from users
        inner join aktivis on aktivis.id = users.id_aktivis inner join aktivis_pekerjaan on aktivis_pekerjaan.id_aktivis = aktivis.id
        where users.id_cu = 0 and users.id_aktivis !=0 and users.status = 1 and aktivis_pekerjaan.selesai is null and aktivis_pekerjaan.id_tempat =1 and (aktivis_pekerjaan.tingkat = 5 or aktivis_pekerjaan.tingkat =6 or aktivis_pekerjaan.tingkat =7 or aktivis_pekerjaan.tingkat =8)  order by aktivis.name asc');
        $presensi = Presensi::with('keterlambatan')->has('keterlambatan')->where('id_cu', 0)->whereYear('created_at', '=', Carbon::parse($date)->format('Y'))->get();
        $presensiGroupBy = $presensi->groupBy('id_user');
        $arrayBro = [];
        $no = 1;
        foreach ($model as $aktivis) {
            $name = $aktivis->name;
            $janP = [];
            $janUK = [];
            $febP = [];
            $febUK = [];
            $marP = [];
            $marUK = [];
            $aprP = [];
            $aprUK = [];
            $meiP = [];
            $meiUK = [];
            $junP = [];
            $junUK = [];
            $julP = [];
            $julUK = [];
            $aguP = [];
            $aguUK = [];
            $sepP = [];
            $sepUK = [];
            $oktP = [];
            $oktUK = [];
            $novP = [];
            $novUK = [];
            $desP = [];
            $desUK = [];

            if (isset($presensiGroupBy[$aktivis->id])) {
                foreach ($presensiGroupBy[$aktivis->id] as $pres) {
                    if (substr($pres->tanggal, 5, 2) == "01") {
                        if ($pres->keterlambatan->jenis == 'PRIBADI') {
                            array_push($janP, $pres->keterlambatan->lama);
                        } else {
                            array_push($janUK, $pres->keterlambatan->lama);
                        }
                    } elseif (substr($pres->tanggal, 5, 2) == "02") {
                        if ($pres->keterlambatan->jenis == 'PRIBADI') {
                            array_push($febP, $pres->keterlambatan->lama);
                        } else {
                            array_push($febUK, $pres->keterlambatan->lama);
                        }
                    } elseif (substr($pres->tanggal, 5, 2) == "03") {
                        if ($pres->keterlambatan->jenis == 'PRIBADI') {
                            array_push($marP, $pres->keterlambatan->lama);
                        } else {
                            array_push($marUK, $pres->keterlambatan->lama);
                        }
                    } elseif (substr($pres->tanggal, 5, 2) == "04") {
                        if ($pres->keterlambatan->jenis == 'PRIBADI') {
                            array_push($aprP, $pres->keterlambatan->lama);
                        } else {
                            array_push($aprUK, $pres->keterlambatan->lama);
                        }
                    } elseif (substr($pres->tanggal, 5, 2) == "05") {
                        if ($pres->keterlambatan->jenis == 'PRIBADI') {
                            array_push($meiP, $pres->keterlambatan->lama);
                        } else {
                            array_push($meiUK, $pres->keterlambatan->lama);
                        }
                    } elseif (substr($pres->tanggal, 5, 2) == "06") {
                        if ($pres->keterlambatan->jenis == 'PRIBADI') {
                            array_push($junP, $pres->keterlambatan->lama);
                        } else {
                            array_push($junUK, $pres->keterlambatan->lama);
                        }
                    } elseif (substr($pres->tanggal, 5, 2) == "07") {
                        if ($pres->keterlambatan->jenis == 'PRIBADI') {
                            array_push($julP, $pres->keterlambatan->lama);
                        } else {
                            array_push($julUK, $pres->keterlambatan->lama);
                        }
                    } elseif (substr($pres->tanggal, 5, 2) == "08") {
                        if ($pres->keterlambatan->jenis == 'PRIBADI') {
                            array_push($aguP, $pres->keterlambatan->lama);
                        } else {
                            array_push($aguUK, $pres->keterlambatan->lama);
                        }
                    } elseif (substr($pres->tanggal, 5, 2) == "09") {
                        if ($pres->keterlambatan->jenis == 'PRIBADI') {
                            array_push($sepP, $pres->keterlambatan->lama);
                        } else {
                            array_push($sepUK, $pres->keterlambatan->lama);
                        }
                    } elseif (substr($pres->tanggal, 5, 2) == "10") {
                        if ($pres->keterlambatan->jenis == 'PRIBADI') {
                            array_push($oktP, $pres->keterlambatan->lama);
                        } else {
                            array_push($oktUK, $pres->keterlambatan->lama);
                        }
                    } elseif (substr($pres->tanggal, 5, 2) == "11") {
                        if ($pres->keterlambatan->jenis == 'PRIBADI') {
                            array_push($novP, $pres->keterlambatan->lama);
                        } else {
                            array_push($novUK, $pres->keterlambatan->lama);
                        }
                    } elseif (substr($pres->tanggal, 5, 2) == "12") {
                        if ($pres->keterlambatan->jenis == 'PRIBADI') {
                            array_push($desP, $pres->keterlambatan->lama);
                        } else {
                            array_push($desUK, $pres->keterlambatan->lama);
                        }
                    }
                }
            }


            $jlh = array_sum($janUK) + array_sum($febUK) + array_sum($marUK) + array_sum($aprUK) + array_sum($meiUK) + array_sum($junUK) + array_sum($julUK) + array_sum($aguUK) + array_sum($sepUK) + array_sum($oktUK) + array_sum($novUK) + array_sum($desUK) +
                array_sum($janP) + array_sum($febP) + array_sum($marP) + array_sum($aprP) + array_sum($meiP) + array_sum($junP) + array_sum($julP) + array_sum($aguP) + array_sum($sepP) + array_sum($oktP) + array_sum($novP) + array_sum($desP);
            $array3 = [];

            array_push($array3, $no);
            array_push($array3, $name);
            array_push($array3, array_sum($janUK));
            array_push($array3, array_sum($janP));
            array_push($array3, array_sum($febUK));
            array_push($array3, array_sum($febP));
            array_push($array3, array_sum($marUK));
            array_push($array3, array_sum($marP));
            array_push($array3, array_sum($aprUK));
            array_push($array3, array_sum($aprP));
            array_push($array3, array_sum($meiUK));
            array_push($array3, array_sum($meiP));
            array_push($array3, array_sum($junUK));
            array_push($array3, array_sum($junP));
            array_push($array3, array_sum($julUK));
            array_push($array3, array_sum($julP));
            array_push($array3, array_sum($aguUK));
            array_push($array3, array_sum($aguP));
            array_push($array3, array_sum($sepUK));
            array_push($array3, array_sum($sepP));
            array_push($array3, array_sum($oktUK));
            array_push($array3, array_sum($oktP));
            array_push($array3, array_sum($novUK));
            array_push($array3, array_sum($novP));
            array_push($array3, array_sum($desUK));
            array_push($array3, array_sum($desP));
            array_push($array3, $jlh);
            array_push($arrayBro, $array3);
            $no++;
        }
        return $arrayBro;
    }

    public function title(): string
    {
        return 'R.LAMBAT';
    }
}

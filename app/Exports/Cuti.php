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

class Cuti implements FromArray, WithHeadings, WithCustomStartCell, WithEvents, WithTitle
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

                $sheet->mergeCells('C5:C6');
                $sheet->setCellValue('C5', "TANGGAL MULAI CUTI");

                $sheet->mergeCells('D5:D6');
                $sheet->setCellValue('D5', "TANGGAL MASUK");

                $sheet->mergeCells('E5:E6');
                $sheet->setCellValue('E5', "LAMA CUTI");

                $sheet->mergeCells('F5:F6');
                $sheet->setCellValue('F5', "REALISASI CUTI");

                $sheet->mergeCells('G5:G6');
                $sheet->setCellValue('G5', "KETERANGAN");

                $sheet->mergeCells('H5:H6');
                $sheet->setCellValue('H5', "TANGGAL PENGAJUAN");

                $sheet->mergeCells('I5:I6');
                $sheet->setCellValue('I5', "TGL ACC");



                $styleArray = [
                    'alignment' => [
                        'horizontal' => \PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_CENTER,
                        'vertical' => \PhpOffice\PhpSpreadsheet\Style\Alignment::VERTICAL_CENTER,
                    ],

                ];

                $event->sheet->getDelegate()->getStyle('A5:I6')->applyFromArray($styleArray);
                $event->sheet->getDelegate()->getColumnDimension('B')->setAutoSize(true);
                $event->sheet->getDelegate()->getColumnDimension('C')->setAutoSize(true);
                $event->sheet->getDelegate()->getColumnDimension('D')->setAutoSize(true);
                $event->sheet->getDelegate()->getColumnDimension('E')->setAutoSize(true);
                $event->sheet->getDelegate()->getColumnDimension('F')->setAutoSize(true);
                $event->sheet->getDelegate()->getColumnDimension('G')->setAutoSize(true);
                $event->sheet->getDelegate()->getColumnDimension('H')->setAutoSize(true);
                $event->sheet->getDelegate()->getColumnDimension('I')->setAutoSize(true);
                $event->sheet->getDelegate()->getStyle('A5:I6')->applyFromArray(['fill' => [
                    'fillType' => \PhpOffice\PhpSpreadsheet\Style\Fill::FILL_SOLID,
                    'color' => ['argb' => 'ffff00']
                ]]);
                $event->sheet->getStyle('A5:I6')->applyFromArray([
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
        $cutiS = PresensiCuti::with('aktivis')->where('realisasi','!=',null)->whereYear('created_at', '=', Carbon::parse($date)->format('Y'))->get();
        $cutiGroupBy = $cutiS->groupBy('id_user');
        $arrayComplete = [];
        $no = 1;
        foreach ($model as $aktivis) {
            $name =  $aktivis->name;
            if (isset($cutiS->groupBy('id_user')[$aktivis->id])) {
                $count = 0;
                foreach ($cutiS->groupBy('id_user')[$aktivis->id] as $data) {
                    $arrayNew = [];
                    if ($count == 0) {
                        array_push($arrayNew, $no);
                        array_push($arrayNew, $name);
                        array_push($arrayNew, Carbon::parse($data->tanggal_mulai)->format('d-m-Y'));
                        array_push($arrayNew, Carbon::parse($data->tanggal_selesai)->format('d-m-Y'));
                        array_push($arrayNew, $data->lama);
                        array_push($arrayNew, Carbon::parse($data->realisasi)->format('d-m-Y'));
                        array_push($arrayNew, $data->alasan);
                        array_push($arrayNew, Carbon::parse($data->tanggal)->format('d-m-Y'));
                        array_push($arrayNew, Carbon::parse($data->tanggal_acc2)->format('d-m-Y'));
                        array_push($arrayComplete, $arrayNew);
                    } else {
                        array_push($arrayNew, 0);
                        array_push($arrayNew, 0);
                        array_push($arrayNew, Carbon::parse($data->tanggal_mulai)->format('d-m-Y'));
                        array_push($arrayNew, Carbon::parse($data->tanggal_selesai)->format('d-m-Y'));
                        array_push($arrayNew, $data->lama);
                        array_push($arrayNew, Carbon::parse($data->realisasi)->format('d-m-Y'));
                        array_push($arrayNew, $data->alasan);
                        array_push($arrayNew, Carbon::parse($data->tanggal)->format('d-m-Y'));
                        array_push($arrayNew, Carbon::parse($data->tanggal_acc2)->format('d-m-Y'));
                        array_push($arrayComplete, $arrayNew);
                    }

                    $count++;
                    
                }
            }else{
                $arrayNew = [];
                array_push($arrayNew, $no);
                array_push($arrayNew, $name);
                array_push($arrayComplete, $arrayNew);
            }

            $no++;
        }

        return $arrayComplete;
    }


    public function title(): string
    {
        return 'CUTI';
    }
}

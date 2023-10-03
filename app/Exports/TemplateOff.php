<?php

namespace App\Exports;

use App\PresensiOffBergilir;
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

class TemplateOff implements FromArray, WithHeadings, WithCustomStartCell, WithEvents, WithTitle
{

    protected $id_cu;

    function __construct($id_cu)
    {
        $this->id_cu = $id_cu;
    }

    public function startCell(): string
    {
        return 'A2';
    }

    public function registerEvents(): array
    {

        return [
            AfterSheet::class => function (AfterSheet $event) {
                /** @var Sheet $sheet */
                $sheet = $event->sheet;
                $sheet->setCellValue('A1', "No.");
                $sheet->setCellValue('B1', "id_user");
                $sheet->setCellValue('C1', "id_aktivis");
                $sheet->setCellValue('D1', "id_cu");
                $sheet->setCellValue('E1', "name");
                $sheet->setCellValue('F1', "tanggal");
                $sheet->setCellValue('G1', "status (isi 1 jika data ingin dimasukkan)");

                $styleArray = [
                    'alignment' => [
                        'horizontal' => \PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_CENTER,
                        'vertical' => \PhpOffice\PhpSpreadsheet\Style\Alignment::VERTICAL_CENTER,
                    ],

                ];

                $styleArray2 = [
                    'alignment' => [
                        // 'horizontal' => \PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_CENTER,
                        'vertical' => \PhpOffice\PhpSpreadsheet\Style\Alignment::VERTICAL_CENTER,
                    ],

                ];

                $cellRange = 'A1:F1'; // All headers
                $event->sheet->getDelegate()->getStyle($cellRange)->applyFromArray($styleArray);
                $event->sheet->getDelegate()->getColumnDimension('E')->setAutoSize(true);
                $event->sheet->getDelegate()->getColumnDimension('G')->setAutoSize(true);
                $event->sheet->getStyle('A1:G1')->applyFromArray([
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

        $model = DB::select('select users.id,users.id_cu,users.id_aktivis,aktivis.name,aktivis.gambar,aktivis_pekerjaan.id_aktivis,aktivis_pekerjaan.tingkat,aktivis_pekerjaan.selesai, aktivis_pekerjaan.id_tempat,aktivis_pekerjaan.name as jabatan  from users
        inner join aktivis on aktivis.id = users.id_aktivis inner join aktivis_pekerjaan on aktivis_pekerjaan.id_aktivis = aktivis.id
        where users.id_cu = ' . $this->id_cu . ' and users.id_aktivis !=0 and users.status = 1 and aktivis_pekerjaan.selesai is null and (aktivis_pekerjaan.tingkat = 5 or aktivis_pekerjaan.tingkat =6 or aktivis_pekerjaan.tingkat =7 or aktivis_pekerjaan.tingkat =8)  order by aktivis.name asc');
        $arrayComplete = [];
        $no = 1;
        foreach ($model as $aktivis) {
            try {
                $arrayNew = [];
                array_push($arrayNew, $no);
                array_push($arrayNew, $aktivis->id);
                array_push($arrayNew, $aktivis->id_aktivis);
                array_push($arrayNew, (string)$aktivis->id_cu);
                array_push($arrayNew, $aktivis->name);


                array_push($arrayComplete, $arrayNew);
                $no++;
            } catch (\Throwable $th) {
            }
        }

        // dd($arrayComplete);
        return $arrayComplete;
    }

    public function title(): string
    {
        return '1';
    }
}

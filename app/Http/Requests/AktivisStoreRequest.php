<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class AktivisStoreRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        switch($this->method())
        {
            case 'GET':
            case 'DELETE':
            {
                return [];
            }
            case 'POST':
            {
                return [
                    'name' => 'required',
                    'nik' => 'required|unique:aktivis,nik,'.$this->aktivis->id,
                ];
            }
            case 'PUT':
            {
                return [
                    'name' => 'required',
                    'nik' => 'required|unique:aktivis,nik,'.$this->aktivis->id,
                ];
            }
            case 'PATCH':
            {
                return [
                    'name' => 'required',
                    'nik' => 'required|unique:aktivis,nik,'.$this->aktivis->id,
                ];
            }
            default:break;
        }
    }
}

import './style/checkbox.css'
import {ReactComponent as CheckedIcon} from './icons/ic_checkbox_checked.svg'
import {ReactComponent as UncheckedIcon} from './icons/ic_checkbox_unchecked.svg'
import {ReactComponent as IntermediateIcon} from './icons/ic_checkbox_half.svg'
import {useState} from "react";
interface ICheckboxProps{
    checked?:boolean,
    intermediate?:boolean,
    disabled?:boolean;
    label?:string

}
export const Checkbox = ({checked,intermediate,disabled,label}:ICheckboxProps)=>{
    const defaultCheckedState = checked?checked:false
    const [isChecked,setIsChecked] = useState<boolean>(defaultCheckedState)
    return (

        <div className={'checkbox-wrapper'}>
            <input type={'checkbox'}  checked={isChecked} onChange={()=>setIsChecked(prev=>!prev)} disabled={disabled}/>
                { isChecked?
                    intermediate? <IntermediateIcon fill={disabled?'grey':''} />:
                    <CheckedIcon fill={'#007aaa'} filter={disabled?'grayscale(50%)':''}/>:
                    <UncheckedIcon fill={disabled?'grey':''}/>}
                <span style={{color:disabled?"grey":""}}>
            {label}
            </span>
        </div>
    )
}
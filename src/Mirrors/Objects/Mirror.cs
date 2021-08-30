﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.Mirrors
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Mirror.
    /// </summary>
    // *** Start programmer edit section *** (Mirror CustomAttributes)

    // *** End programmer edit section *** (Mirror CustomAttributes)
    [AutoAltered()]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("MirrorE", new string[] {
            "SerialNumber as \'Serial number\'",
            "MirrorType as \'Mirror type\'",
            "MirrorType.Name as \'Name\'"}, Hidden=new string[] {
            "MirrorType.Name"})]
    [AssociatedDetailViewAttribute("MirrorE", "Owners", "MirrorOwnerE", true, "", "Owners", true, new string[] {
            ""})]
    [MasterViewDefineAttribute("MirrorE", "MirrorType", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "Name")]
    [View("MirrorL", new string[] {
            "SerialNumber as \'Serial number\'",
            "MirrorType.Name as \'Name\'"})]
    public class Mirror : ICSSoft.STORMNET.DataObject
    {
        
        private string fSerialNumber;
        
        private IIS.Mirrors.MirrorType fMirrorType;
        
        private IIS.Mirrors.DetailArrayOfMirrorOwner fOwners;
        
        // *** Start programmer edit section *** (Mirror CustomMembers)

        // *** End programmer edit section *** (Mirror CustomMembers)

        
        /// <summary>
        /// SerialNumber.
        /// </summary>
        // *** Start programmer edit section *** (Mirror.SerialNumber CustomAttributes)

        // *** End programmer edit section *** (Mirror.SerialNumber CustomAttributes)
        [StrLen(255)]
        public virtual string SerialNumber
        {
            get
            {
                // *** Start programmer edit section *** (Mirror.SerialNumber Get start)

                // *** End programmer edit section *** (Mirror.SerialNumber Get start)
                string result = this.fSerialNumber;
                // *** Start programmer edit section *** (Mirror.SerialNumber Get end)

                // *** End programmer edit section *** (Mirror.SerialNumber Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Mirror.SerialNumber Set start)

                // *** End programmer edit section *** (Mirror.SerialNumber Set start)
                this.fSerialNumber = value;
                // *** Start programmer edit section *** (Mirror.SerialNumber Set end)

                // *** End programmer edit section *** (Mirror.SerialNumber Set end)
            }
        }
        
        /// <summary>
        /// Mirror.
        /// </summary>
        // *** Start programmer edit section *** (Mirror.MirrorType CustomAttributes)

        // *** End programmer edit section *** (Mirror.MirrorType CustomAttributes)
        public virtual IIS.Mirrors.MirrorType MirrorType
        {
            get
            {
                // *** Start programmer edit section *** (Mirror.MirrorType Get start)

                // *** End programmer edit section *** (Mirror.MirrorType Get start)
                IIS.Mirrors.MirrorType result = this.fMirrorType;
                // *** Start programmer edit section *** (Mirror.MirrorType Get end)

                // *** End programmer edit section *** (Mirror.MirrorType Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Mirror.MirrorType Set start)

                // *** End programmer edit section *** (Mirror.MirrorType Set start)
                this.fMirrorType = value;
                // *** Start programmer edit section *** (Mirror.MirrorType Set end)

                // *** End programmer edit section *** (Mirror.MirrorType Set end)
            }
        }
        
        /// <summary>
        /// Mirror.
        /// </summary>
        // *** Start programmer edit section *** (Mirror.Owners CustomAttributes)

        // *** End programmer edit section *** (Mirror.Owners CustomAttributes)
        public virtual IIS.Mirrors.DetailArrayOfMirrorOwner Owners
        {
            get
            {
                // *** Start programmer edit section *** (Mirror.Owners Get start)

                // *** End programmer edit section *** (Mirror.Owners Get start)
                if ((this.fOwners == null))
                {
                    this.fOwners = new IIS.Mirrors.DetailArrayOfMirrorOwner(this);
                }
                IIS.Mirrors.DetailArrayOfMirrorOwner result = this.fOwners;
                // *** Start programmer edit section *** (Mirror.Owners Get end)

                // *** End programmer edit section *** (Mirror.Owners Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Mirror.Owners Set start)

                // *** End programmer edit section *** (Mirror.Owners Set start)
                this.fOwners = value;
                // *** Start programmer edit section *** (Mirror.Owners Set end)

                // *** End programmer edit section *** (Mirror.Owners Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "MirrorE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View MirrorE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("MirrorE", typeof(IIS.Mirrors.Mirror));
                }
            }
            
            /// <summary>
            /// "MirrorL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View MirrorL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("MirrorL", typeof(IIS.Mirrors.Mirror));
                }
            }
        }
    }
}